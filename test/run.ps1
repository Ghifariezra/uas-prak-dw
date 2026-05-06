Write-Host "Merging JavaScript Files with Priority..." -ForegroundColor Yellow

# 1. Tentukan urutan prioritas folder
# Kita harus menggabungkan Core & Data lebih dulu agar fungsinya tersedia untuk yang lain
$priorityFolders = @(
    "core",       # DOM helper & Event listeners
    "data",       # Data category/static data
    "utils",      # Fungsi kecil seperti toast, comments
    "router",     # Routing logic
    "components", # UI components (banner, cards, dll)
    "."           # app.js dan pages.js di root folder scripts
)

$sourcePath = ".\scripts"
$outputFile = ".\test\merged_code.js"

if (Test-Path $outputFile) { Remove-Item $outputFile }

# 2. Loop berdasarkan urutan prioritas
foreach ($folder in $priorityFolders) {
    $currentPath = Join-Path $sourcePath $folder
    
    if (Test-Path $currentPath) {
        # Ambil file .js saja (Recurse: false untuk yang root agar tidak double)
        $files = Get-ChildItem -Path $currentPath -Filter *.js
        
        foreach ($file in $files) {
            Write-Host "Merging: $($file.Name) from $folder" -ForegroundColor Gray
            
            $header = "`n`n// [MERGED] Folder: $folder | File: $($file.Name) `n"
            $header += "// " + ("=" * 40) + "`n"
            
            Add-Content -Path $outputFile -Value $header
            Get-Content $file.FullName | Add-Content -Path $outputFile
        }
    }
}

Write-Host "`nAll JS merged successfully into $outputFile!" -ForegroundColor Green