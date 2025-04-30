@echo off
echo Committing changes...
git add .
git commit -m "Fix navigation issues for GitHub Pages"
git push origin main

echo Deploying to GitHub Pages...
npm run deploy

echo Done! Your site should be updated in a few minutes.
echo Visit: https://zeeshanfr472.github.io/facility-profiling-frontend-map
pause
