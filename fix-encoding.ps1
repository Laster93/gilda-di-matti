# Converte in UTF-8 i file dei contenuti che sono stati salvati in ANSI/ISO-8859
# (es. dal Blocco Note con la codifica sbagliata), cosi' le lettere accentate
# non diventano simboli strani sul sito. I file gia' in UTF-8 non vengono toccati.
$ErrorActionPreference = 'Stop'
$root = Join-Path $PSScriptRoot 'src\content'
if (-not (Test-Path $root)) { exit 0 }

$utf8NoBom  = New-Object System.Text.UTF8Encoding($false)
$utf8Strict = New-Object System.Text.UTF8Encoding($false, $true)

Get-ChildItem -Path $root -Recurse -Include *.md, *.txt | ForEach-Object {
  $bytes = [System.IO.File]::ReadAllBytes($_.FullName)
  $isValidUtf8 = $true
  try { [void]$utf8Strict.GetString($bytes) } catch { $isValidUtf8 = $false }
  if (-not $isValidUtf8) {
    # Non e' UTF-8 valido: lo interpreto come Windows-1252 e lo riscrivo in UTF-8.
    $text = [System.Text.Encoding]::GetEncoding(1252).GetString($bytes)
    [System.IO.File]::WriteAllText($_.FullName, $text, $utf8NoBom)
    Write-Host "    corretto in UTF-8: $($_.Name)"
  }
}
