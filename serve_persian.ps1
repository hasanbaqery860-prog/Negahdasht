# Set console encoding to UTF-8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

Write-Host "Starting local web server with Persian/UTF-8 support..." -ForegroundColor Green
Write-Host ""
Write-Host "The website will be available at: http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host ""

# Set environment variable for Python
$env:PYTHONIOENCODING = "utf-8"

# Start Python server with proper encoding
python -c "
import http.server
import socketserver

class UTF8HTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        super().end_headers()
    
    def guess_type(self, path):
        if path.endswith('.html'):
            return 'text/html; charset=utf-8'
        elif path.endswith('.css'):
            return 'text/css; charset=utf-8'
        elif path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        return super().guess_type(path)

handler = UTF8HTTPRequestHandler
httpd = socketserver.TCPServer(('', 8000), handler)
print('Server running at http://localhost:8000 with UTF-8 support')
httpd.serve_forever()
"
