@echo off
echo Updating blog_list.html...
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'url\(''fonts/', 'url(''../statics/fonts/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'url\(\"fonts/', 'url(\"../statics/fonts/' | Set-Content 'templates/blog_list.html'"

echo Updating device_list.html...
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'url\(''fonts/', 'url(''../statics/fonts/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'url\(\"fonts/', 'url(\"../statics/fonts/' | Set-Content 'templates/device_list.html'"

echo Updating device_details.html...
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'url\(''fonts/', 'url(''../statics/fonts/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'url\(\"fonts/', 'url(\"../statics/fonts/' | Set-Content 'templates/device_details.html'"

echo All files updated successfully!
pause
