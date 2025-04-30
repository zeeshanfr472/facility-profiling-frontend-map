@echo off
echo ========================================
echo   FINAL FIX - GitHub Pages Deployment
echo ========================================
echo.

echo Step 1: Ensuring all dependencies are installed...
call npm install
if %errorlevel% neq 0 (
  echo Error installing dependencies.
  goto :error
)
echo Dependencies verified successfully.
echo.

echo Step 2: Building the application...
call npm run build
if %errorlevel% neq 0 (
  echo Error building the application.
  goto :error
)
echo Build completed successfully.
echo.

echo Step 3: Committing changes to Git...
git add .
git commit -m "Fix GitHub Pages absolute URL navigation"
if %errorlevel% neq 0 (
  echo Note: No changes to commit or commit failed.
  echo This is not critical for deployment but you should check your Git configuration.
)
echo.

echo Step 4: Pushing to GitHub...
git push origin main
if %errorlevel% neq 0 (
  echo Warning: There might have been an issue pushing to GitHub.
  echo This is not critical for deployment but you should check your Git configuration.
)
echo.

echo Step 5: Deploying to GitHub Pages...
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
echo IMPORTANT INSTRUCTIONS:
echo 1. Always use this link to access your application: 
echo    https://zeeshanfr472.github.io/facility-profiling-frontend-map/
echo.
echo 2. If you still encounter issues, try clearing your browser cache
echo    or opening in an incognito/private window.
echo.
echo 3. The changes may take a few minutes to propagate.
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
