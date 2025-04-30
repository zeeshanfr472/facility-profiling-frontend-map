@echo off
echo ========================================
echo   Deploying to GitHub Pages
echo ========================================
echo.

echo Step 1: Building the application...
call npm run build
if %errorlevel% neq 0 (
  echo Error building the application.
  goto :error
)
echo Build completed successfully.
echo.

echo Step 2: Committing changes to Git...
git add .
git commit -m "Update navigation for GitHub Pages deployment"
if %errorlevel% neq 0 (
  echo Changes committed successfully.
)
echo.

echo Step 3: Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
  echo Warning: There might have been an issue pushing to GitHub.
  echo This is not critical for deployment but you should check your Git configuration.
)
echo.

echo Step 4: Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
  echo Error deploying to GitHub Pages.
  goto :error
)
echo.

echo ========================================
echo   Deployment completed successfully!
echo ========================================
echo.
echo Your application should be available at:
echo https://zeeshanfr472.github.io/facility-profiling-frontend-map/
echo.
echo Note: It might take a few minutes for the changes to be visible.
echo.
echo Press any key to exit...
pause > nul
goto :eof

:error
echo.
echo ========================================
echo   Deployment failed!
echo ========================================
echo.
echo Press any key to exit...
pause > nul
