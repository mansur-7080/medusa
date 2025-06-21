@echo off
cls
title MEDUSA STOP
color 0C

echo ========================================
echo      MEDUSA DASTURLARINI TO'XTATISH
echo ========================================
echo.

echo Backend to'xtatilmoqda (port 9000)...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":9000"') do (
    echo Process %%a to'xtatilmoqda...
    taskkill /f /pid %%a 2>nul
)

echo.
echo Storefront to'xtatilmoqda (port 8000)...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":8000"') do (
    echo Process %%a to'xtatilmoqda...
    taskkill /f /pid %%a 2>nul
)

echo.
echo Admin panel to'xtatilmoqda (port 7001)...
for /f "tokens=5" %%a in ('netstat -aon ^| find ":7001"') do (
    echo Process %%a to'xtatilmoqda...
    taskkill /f /pid %%a 2>nul
)

echo.
echo ========================================
echo        BARCHA DASTURLAR TO'XTATILDI!
echo ========================================
echo.
pause
