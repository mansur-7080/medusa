@echo off
title Medusa Services Launcher
echo =======================================
echo Starting Medusa Backend and Storefront
echo =======================================

echo.
echo [1/2] Starting Medusa Backend...
echo Directory: d:\meduza\my-medusa-store
cd /d "d:\meduza\my-medusa-store"
start "Medusa Backend" cmd /k "npm run dev"

echo.
echo Waiting 10 seconds for backend to start...
timeout /t 10 /nobreak >nul

echo.
echo [2/2] Starting Medusa Storefront...
echo Directory: d:\meduza\my-medusa-store-storefront
cd /d "d:\meduza\my-medusa-store-storefront"
start "Medusa Storefront" cmd /k "npm run dev"

echo.
echo =======================================
echo Services Starting...
echo =======================================
echo Backend will be available at: http://localhost:9000
echo Storefront will be available at: http://localhost:8000
echo Admin Panel will be available at: http://localhost:9000/app
echo.
echo Close this window after services have started.
echo =======================================
pause
