@echo off
echo ========================================================
echo   Starting Digital Resume Builder (Full Stack)
echo ========================================================
echo.
echo 1. Starting Backend API on http://localhost:5000...
start "Digital Resume Builder - Backend (Port 5000)" cmd /k "cd backend && npm run dev"

echo 2. Starting Frontend Client on http://localhost:5173...
start "Digital Resume Builder - Frontend (Port 5173)" cmd /k "cd frontend && npm run dev"

echo.
echo Both servers have been launched in separate terminal windows.
echo Open http://localhost:5173 in your browser to view the application!
echo.
pause
