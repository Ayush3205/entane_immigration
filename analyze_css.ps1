$cssFiles = Get-ChildItem -Path "d:\Freelance\entane_ui\src" -Recurse -Filter "*.css"
$allClasses = @{}

foreach ($file in $cssFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $matches = [regex]::Matches($content, '\.([a-zA-Z_-][a-zA-Z0-9_-]*)(?=\s|,|\{|:|[[])')
    $classes = @()
    foreach ($m in $matches) {
        $cls = $m.Groups[1].Value
        if ($classes -notcontains $cls) {
            $classes += $cls
        }
    }
    
    Write-Output "=== $($file.BaseName) ($($file.FullName)) ==="
    foreach ($cls in $classes) {
        Write-Output "  .$cls"
        if (-not $allClasses.ContainsKey($cls)) {
            $allClasses[$cls] = @()
        }
        $allClasses[$cls] += $file.BaseName
    }
    Write-Output ""
}

Write-Output "=========================================="
Write-Output "DUPLICATE CLASS NAMES (appear in 2+ files):"
Write-Output "=========================================="
foreach ($cls in ($allClasses.Keys | Sort-Object)) {
    if ($allClasses[$cls].Count -gt 1) {
        $files = $allClasses[$cls] -join ", "
        Write-Output "  .$cls -> $files"
    }
}
