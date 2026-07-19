@echo off
chcp 65001 >nul
cd /d "%~dp0"
title Pubblica sito - Gilda dei Matti

echo ============================================================
echo    PUBBLICAZIONE SITO - Gilda dei Matti
echo ============================================================
echo.

echo [1/5] Sincronizzo con GitHub...
git pull --ff-only
if errorlevel 1 goto errore_pull

echo.
echo [2/5] Controllo i file .txt da rinominare in .md...
for /r "%~dp0src\content" %%f in (*.txt) do (
  echo    - %%~nxf  --^>  %%~nf.md
  ren "%%f" "%%~nf.md"
)
echo    Controllo la codifica dei testi (UTF-8)...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0fix-encoding.ps1"

echo.
echo [3/5] Preparo le modifiche...
git add -A

echo.
echo [4/5] Salvo le modifiche...
for /f "delims=" %%i in ('powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd HH:mm'"') do set STAMP=%%i
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "Aggiornamento contenuti - %STAMP%"
  if errorlevel 1 goto errore_commit
) else (
  echo    Nessuna modifica nuova nei file.
)

echo.
echo [5/5] Invio a GitHub (Vercel pubblichera' da solo)...
for /f %%n in ('git rev-list --count origin/master..HEAD') do set AHEAD=%%n
if "%AHEAD%"=="0" (
  echo    Tutto gia' pubblicato: niente da inviare.
  echo.
  pause
  exit /b 0
)
git push
if errorlevel 1 goto errore_push

echo.
echo ============================================================
echo    FATTO! Il sito sara' online tra circa 1 minuto.
echo ============================================================
echo.
pause
exit /b 0

:errore_pull
echo.
echo    ERRORE nella sincronizzazione con GitHub.
echo    Il sito e' stato modificato altrove, oppure il login non e' riuscito.
echo    Fermati e chiedi aiuto prima di continuare.
echo.
pause
exit /b 1

:errore_commit
echo.
echo    ERRORE nel salvataggio delle modifiche (commit).
echo    Fermati e chiedi aiuto.
echo.
pause
exit /b 1

:errore_push
echo.
echo    ERRORE nell'invio a GitHub.
echo    Se si e' aperta una finestra di login, completala e riprova.
echo.
pause
exit /b 1
