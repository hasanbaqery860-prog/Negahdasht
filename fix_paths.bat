@echo off
echo Fixing paths in all HTML files...

echo Updating index.html...
powershell -Command "(Get-Content 'templates/index.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/index.html'"

echo Updating blog.html...
powershell -Command "(Get-Content 'templates/blog.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/blog.html'"

echo Updating blog_list.html...
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/blog_list.html'"

echo Updating device_list.html...
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/device_list.html'"

echo Updating device_details.html...
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'href=''css/', 'href=''../statics/css/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'href=\"css/', 'href=\"../statics/css/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=''js/', 'src=''../statics/js/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=\"js/', 'src=\"../statics/js/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=\"images/', 'src=\"../statics/images/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'src=''images/', 'src=''../statics/images/' | Set-Content 'templates/device_details.html'"

echo All paths fixed successfully!
pause
