/**
 * BasePath utility to handle GitHub Pages path prefix
 * 
 * This helps ensure navigation works correctly both in local development
 * and in GitHub Pages deployment.
 */

// Get the base path for GitHub Pages
const getBasePath = () => {
  return '/facility-profiling-frontend-map';
};

// Navigate with proper hash routing for GitHub Pages
const navigateTo = (path) => {
  // Get the full URL for GitHub Pages deployment
  const baseUrl = 'https://zeeshanfr472.github.io';
  const repoPath = '/facility-profiling-frontend-map';
  
  // Create the proper URL with hash routing
  const fullUrl = `${baseUrl}${repoPath}/#${path}`;
  
  // Navigate to the URL
  window.location.href = fullUrl;
};

export { getBasePath, navigateTo };
