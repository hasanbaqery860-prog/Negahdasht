# Update CSS paths
Get-ChildItem "templates/*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace "href='css/", "href='../statics/css/"
    $content = $content -replace 'href="css/', 'href="../statics/css/'
    Set-Content $_.FullName $content -Encoding UTF8
}

# Update JS paths
Get-ChildItem "templates/*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace "src='js/", "src='../statics/js/"
    $content = $content -replace 'src="js/', 'src="../statics/js/'
    Set-Content $_.FullName $content -Encoding UTF8
}

# Update image paths
Get-ChildItem "templates/*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace 'src="images/', 'src="../statics/images/'
    $content = $content -replace "src='images/", "src='../statics/images/"
    Set-Content $_.FullName $content -Encoding UTF8
}

# Update font paths in inline styles
Get-ChildItem "templates/*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $content = $content -replace "url\('fonts/", "url('../statics/fonts/"
    $content = $content -replace 'url\("fonts/', 'url("../statics/fonts/'
    Set-Content $_.FullName $content -Encoding UTF8
}

Write-Host "All paths updated successfully!"
