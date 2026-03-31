$files = @{
    "d:\Freelance\entane_ui\src\pages\HomePage.js" = "import '../App.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\AustraliaSection.js" = "import './AustraliaSection.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\BookFreeCallBanner.js" = "import './BookFreeCallBanner.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\DreamSection.js" = "import './DreamSection.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\FindYourPlace.js" = "import './FindYourPlace.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\Hero.js" = "import './Hero.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\LatestNews.js" = "import './LatestNews.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\Newsletter.js" = "import './Newsletter.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\RealStories.js" = "import './RealStories.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\ServiceCards.js" = "import './ServiceCards.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\StartYourJourney.js" = "import './StartYourJourney.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\Testimonials.js" = "import './Testimonials.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\Universities.js" = "import './Universities.css';"
    "d:\Freelance\entane_ui\src\components\Home-Page\WhatEsanteDoes.js" = "import './WhatEsanteDoes.css';"
    "d:\Freelance\entane_ui\src\components\Reusable\ConsultationPopup.js" = "import './ConsultationPopup.css';"
    "d:\Freelance\entane_ui\src\components\Reusable\Footer.js" = "import './Footer.css';"
    "d:\Freelance\entane_ui\src\components\Reusable\Header.js" = "import './Header.css';"
}

# Also handle WhyAustralia which uses double quotes
$files["d:\Freelance\entane_ui\src\components\Why-Australia\WhyAustralia.js"] = 'import "./WhyAustralia.css";'

foreach ($entry in $files.GetEnumerator()) {
    $filePath = $entry.Key
    $importLine = $entry.Value
    
    $content = Get-Content $filePath -Raw -Encoding UTF8
    $newContent = $content.Replace($importLine + "`r`n", "")
    # Also try without \r
    $newContent = $newContent.Replace($importLine + "`n", "")
    
    if ($content -ne $newContent) {
        [System.IO.File]::WriteAllText($filePath, $newContent, [System.Text.UTF8Encoding]::new($false))
        Write-Output "DONE: $filePath"
    } else {
        Write-Output "SKIP (not found): $filePath - looking for: $importLine"
    }
}
