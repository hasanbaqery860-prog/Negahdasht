@echo off
echo Fixing ALL remaining paths (slider images, backgrounds, etc.)...

echo Updating index.html - fixing slider and background images...
powershell -Command "(Get-Content 'templates/index.html') -replace 'data-thumb=\"images/', 'data-thumb=\"../statics/images/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'data-lazyload=\"images/', 'data-lazyload=\"../statics/images/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'srcset=\"images/', 'srcset=\"../statics/images/' | Set-Content 'templates/index.html'"
powershell -Command "(Get-Content 'templates/index.html') -replace 'background-image:url\(images/', 'background-image:url(../statics/images/' | Set-Content 'templates/index.html'"

echo Updating blog.html - fixing all image paths...
powershell -Command "(Get-Content 'templates/blog.html') -replace 'data-thumb=\"images/', 'data-thumb=\"../statics/images/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'data-lazyload=\"images/', 'data-lazyload=\"../statics/images/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'srcset=\"images/', 'srcset=\"../statics/images/' | Set-Content 'templates/blog.html'"
powershell -Command "(Get-Content 'templates/blog.html') -replace 'background-image:url\(images/', 'background-image:url(../statics/images/' | Set-Content 'templates/blog.html'"

echo Updating blog_list.html - fixing all image paths...
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'data-thumb=\"images/', 'data-thumb=\"../statics/images/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'data-lazyload=\"images/', 'data-lazyload=\"../statics/images/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'srcset=\"images/', 'srcset=\"../statics/images/' | Set-Content 'templates/blog_list.html'"
powershell -Command "(Get-Content 'templates/blog_list.html') -replace 'background-image:url\(images/', 'background-image:url(../statics/images/' | Set-Content 'templates/blog_list.html'"

echo Updating device_list.html - fixing all image paths...
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'data-thumb=\"images/', 'data-thumb=\"../statics/images/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'data-lazyload=\"images/', 'data-lazyload=\"../statics/images/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'srcset=\"images/', 'srcset=\"../statics/images/' | Set-Content 'templates/device_list.html'"
powershell -Command "(Get-Content 'templates/device_list.html') -replace 'background-image:url\(images/', 'background-image:url(../statics/images/' | Set-Content 'templates/device_list.html'"

echo Updating device_details.html - fixing all image paths...
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'data-thumb=\"images/', 'data-thumb=\"../statics/images/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'data-lazyload=\"images/', 'data-lazyload=\"../statics/images/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'srcset=\"images/', 'srcset=\"../statics/images/' | Set-Content 'templates/device_details.html'"
powershell -Command "(Get-Content 'templates/device_details.html') -replace 'background-image:url\(images/', 'background-image:url(../statics/images/' | Set-Content 'templates/device_details.html'"

echo All paths fixed! Slider images and backgrounds should work now.
pause
