# PowerShell script to remove version suffixes from imports

Write-Host "Fixing versioned imports..." -ForegroundColor Cyan
Write-Host ""

$fixedCount = 0

# Find all .tsx and .ts files recursively
Get-ChildItem -Path . -Include *.tsx,*.ts -Recurse | ForEach-Object {
    $filePath = $_.FullName
    $content = Get-Content $filePath -Raw
    $originalContent = $content
    
    # Remove @version from imports (e.g., @1.2.3)
    $content = $content -replace '@\d+\.\d+\.\d+', ''
    
    # If content changed, write it back
    if ($content -ne $originalContent) {
        Set-Content -Path $filePath -Value $content -NoNewline
        Write-Host "Fixed: $($_.Name)" -ForegroundColor Green
        $fixedCount++
    }
}

Write-Host ""
Write-Host "✅ Fixed $fixedCount files!" -ForegroundColor Green
