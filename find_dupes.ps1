$cssFiles = Get-ChildItem -Path "d:\Freelance\entane_ui\src" -Recurse -Filter "*.css"
$allClasses = @{}

foreach ($file in $cssFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    if ($null -eq $content) { continue }
    $matches = [regex]::Matches($content, '\.([a-zA-Z_-][a-zA-Z0-9_-]*)(?=[\s,\{:\[])')
    foreach ($m in $matches) {
        $cls = $m.Groups[1].Value
        if (-not $allClasses.ContainsKey($cls)) {
            $allClasses[$cls] = [System.Collections.Generic.HashSet[string]]::new()
        }
        [void]$allClasses[$cls].Add($file.BaseName)
    }
}

$dupes = $allClasses.GetEnumerator() | Where-Object { $_.Value.Count -gt 1 } | Sort-Object Name
foreach ($d in $dupes) {
    $files = ($d.Value | Sort-Object) -join ", "
    Write-Output "$($d.Name)|$files"
}
