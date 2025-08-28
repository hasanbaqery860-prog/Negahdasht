@echo off
chcp 65001 >nul
set PYTHONIOENCODING=utf-8
echo Starting local web server with Persian/UTF-8 support...
echo.
echo The website will be available at: http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
python -c "import http.server, socketserver; handler = http.server.SimpleHTTPRequestHandler; handler.extensions_map.update({'.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'application/javascript; charset=utf-8'}); httpd = socketserver.TCPServer(('', 8000), handler); print('Server running at http://localhost:8000'); httpd.serve_forever()"
pause
