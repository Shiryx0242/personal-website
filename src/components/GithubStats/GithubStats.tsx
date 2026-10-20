import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Users, BookMarked, Star, ExternalLink } from 'lucide-react';
import './GithubStats.css';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

interface GitHubUserResponse {
  followers: number;
  public_repos: number;
}

interface GitHubRepoResponse {
  stargazers_count: number;
}

interface StatsState {
  followers: number | null;
  publicRepos: number | null;
  totalStars: number | null;
}

const GITHUB_USERNAME = 'Shiryx0242';

const blueCalendarTheme = {
  light: ['#18181b', '#1e3a8a', '#1d4ed8', '#2563eb', '#60a5fa'],
  dark: ['#18181b', '#1e3a8a', '#1d4ed8', '#2563eb', '#60a5fa'],
};

const GithubStats: React.FC = () => {
  const [stats, setStats] = useState<StatsState>({
    followers: null,
    publicRepos: null,
    totalStars: null,
  });
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        setLoading(true);

        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const userData: GitHubUserResponse = await userRes.json();
        const reposData: GitHubRepoResponse[] = await reposRes.json();

        const starsCount = Array.isArray(reposData)
          ? reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0)
          : 0;

        if (isMounted) {
          setStats({
            followers: userData.followers ?? 0,
            publicRepos: userData.public_repos ?? 0,
            totalStars: starsCount,
          });
        }
      } catch {
        if (isMounted) {
          setStats({
            followers: 0,
            publicRepos: 0,
            totalStars: 0,
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGitHubStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const statItems = [
    {
      label: 'Followers',
      value: stats.followers,
      icon: Users,
      subtext: 'Community network',
    },
    {
      label: 'Public Repos',
      value: stats.publicRepos,
      icon: BookMarked,
      subtext: 'Open-source repositories',
    },
    {
      label: 'GitHub Stars',
      value: stats.totalStars,
      icon: Star,
      subtext: 'Total repository stars',
    },
  ];

  return (
    <section id="github-stats" className="gh-stats-section">
      <div className="gh-stats-container">
        <div className="gh-stats-header">
          <span className="gh-stats-badge">OPEN SOURCE ACTIVITY</span>
          <h2 className="gh-stats-title">
            GitHub Contributions <span className="gh-text-blue">&amp; Stats</span>
          </h2>
        </div>

        <div className="gh-stats-layout">
          {/* Left Section (70%) - Contribution Graph */}
          <div className="gh-calendar-card">
            <div className="gh-calendar-top">
              <div className="gh-user-info">
                <div className="gh-icon-box">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <h3 className="gh-card-heading">Contribution Activity</h3>
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gh-username-link"
                  >
                    @{GITHUB_USERNAME}
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gh-profile-pill"
              >
                View Profile
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="gh-calendar-wrapper">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme="dark"
                theme={blueCalendarTheme}
                blockSize={13}
                blockMargin={4}
                fontSize={13}
              />
            </div>
          </div>

          {/* Right Section (30%) - Real-time Stats Cards */}
          <div className="gh-cards-column">
            {statItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.label} className="gh-stat-card">
                  <div className="gh-stat-icon-wrapper">
                    <IconComponent size={22} />
                  </div>
                  <div className="gh-stat-content">
                    <span className="gh-stat-label">{item.label}</span>
                    {loading ? (
                      <div className="gh-stat-skeleton" aria-label="Loading">
                        -
                      </div>
                    ) : (
                      <span className="gh-stat-value">
                        {item.value !== null ? item.value.toLocaleString() : '-'}
                      </span>
                    )}
                    <span className="gh-stat-subtext">{item.subtext}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
