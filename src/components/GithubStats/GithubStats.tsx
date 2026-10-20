import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { ExternalLink } from 'lucide-react';
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

const GITHUB_USERNAME = 'Shiryx0242';

const blueCalendarTheme = {
  light: ['#18181b', '#1e3a8a', '#1d4ed8', '#2563eb', '#60a5fa'],
  dark: ['#18181b', '#1e3a8a', '#1d4ed8', '#2563eb', '#60a5fa'],
};

const GithubStats: React.FC = () => {
  return (
    <div id="github-stats" className="gh-calendar-container">
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
            blockSize={14}
            blockMargin={4}
            fontSize={13}
          />
        </div>
      </div>
    </div>
  );
};

export default GithubStats;
