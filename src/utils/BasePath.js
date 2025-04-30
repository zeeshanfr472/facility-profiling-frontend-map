/**
 * BasePath utility to handle GitHub Pages path prefix
 * 
 * This helps ensure navigation works correctly both in local development
 * and in GitHub Pages deployment.
 */

// Check if we're running on GitHub Pages
const isGitHubPages = () => {
  return window.location.hostname === 'zeeshanfr472.github.io';
};

// Get the base URL for navigation
const getBaseUrl = () => {
  if (isGitHubPages()) {
    return '/facility-profiling-frontend-map';
  }
  return '';
};

// Navigate to a path, considering GitHub Pages
const navigateTo = (path) => {
  // For HashRouter, simply update the hash
  window.location.hash = path;
  
  // Force a reload to make sure everything gets updated
  // This is a fallback to ensure the app state is refreshed
  window.location.reload();
};

export { getBaseUrl, navigateTo, isGitHubPages };
