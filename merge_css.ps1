$srcDir = "d:\Freelance\entane_ui\src"
$output = "$srcDir\global.css"

# Order: index.css first (tailwind + vars), then App.css (globals), then components alphabetically
$fileOrder = @(
    "$srcDir\index.css",
    "$srcDir\App.css",
    "$srcDir\components\Home-Page\AustraliaSection.css",
    "$srcDir\components\Home-Page\BookFreeCallBanner.css",
    "$srcDir\components\Home-Page\DreamSection.css",
    "$srcDir\components\Home-Page\FastTrackDegree.css",
    "$srcDir\components\Home-Page\FindYourPlace.css",
    "$srcDir\components\Home-Page\Hero.css",
    "$srcDir\components\Home-Page\LatestNews.css",
    "$srcDir\components\Home-Page\Newsletter.css",
    "$srcDir\components\Home-Page\RealStories.css",
    "$srcDir\components\Home-Page\ServiceCards.css",
    "$srcDir\components\Home-Page\SkillsShortage.css",
    "$srcDir\components\Home-Page\StartYourJourney.css",
    "$srcDir\components\Home-Page\Testimonials.css",
    "$srcDir\components\Home-Page\Universities.css",
    "$srcDir\components\Home-Page\WhatEsanteDoes.css",
    "$srcDir\components\Reusable\ConsultationPopup.css",
    "$srcDir\components\Reusable\Footer.css",
    "$srcDir\components\Reusable\Header.css",
    "$srcDir\components\Why-Australia\WhyAustralia.css"
)

$result = New-Object System.Text.StringBuilder

foreach ($file in $fileOrder) {
    $name = [System.IO.Path]::GetFileNameWithoutExtension($file)
    $content = Get-Content $file -Raw -Encoding UTF8
    
    [void]$result.AppendLine("/* ================================================")
    [void]$result.AppendLine("   Source: $name")
    [void]$result.AppendLine("   ================================================ */")
    [void]$result.AppendLine("")
    
    # Rename duplicates in FastTrackDegree
    if ($name -eq "FastTrackDegree") {
        $content = $content -replace '\.section-header(?=[\s,\{:])', '.fasttrack-section-header'
        $content = $content -replace '\.section-title-accent(?=[\s,\{:])', '.fasttrack-section-title-accent'
        $content = $content -replace '\.section-title(?=[\s,\{:])', '.fasttrack-section-title'
        $content = $content -replace '\.section-subtitle(?=[\s,\{:])', '.fasttrack-section-subtitle'
        $content = $content -replace '\.explore-btn(?=[\s,\{:])', '.fasttrack-explore-btn'
    }
    
    # Rename duplicates in SkillsShortage
    if ($name -eq "SkillsShortage") {
        $content = $content -replace '\.section-header(?=[\s,\{:])', '.skills-section-header'
        $content = $content -replace '\.section-title-accent(?=[\s,\{:])', '.skills-section-title-accent'
        $content = $content -replace '\.section-title(?=[\s,\{:])', '.skills-section-title'
        $content = $content -replace '\.section-subtitle(?=[\s,\{:])', '.skills-section-subtitle'
        $content = $content -replace '\.explore-btn(?=[\s,\{:])', '.skills-explore-btn'
    }
    
    [void]$result.AppendLine($content)
    [void]$result.AppendLine("")
}

[System.IO.File]::WriteAllText($output, $result.ToString(), [System.Text.Encoding]::UTF8)
Write-Output "global.css created successfully at $output"
Write-Output "Size: $((Get-Item $output).Length) bytes"
