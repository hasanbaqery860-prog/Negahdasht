@echo off
chcp 65001 >nul
echo Starting local web server with UTF-8 support...
echo.
echo The website will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000 --bind 127.0.0.1
pause
