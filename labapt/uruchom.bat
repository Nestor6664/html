@echo off
chcp 65001 >nul

REM Sprawdzenie dostępności Pythona
where py >nul 2>&1
if %errorlevel%==0 (
    set PYTHON_CMD=py
    goto :menu
)

where python >nul 2>&1
if %errorlevel%==0 (
    set PYTHON_CMD=python
    goto :menu
)

where python3 >nul 2>&1
if %errorlevel%==0 (
    set PYTHON_CMD=python3
    goto :menu
)

echo ========================================
echo BŁĄD: Python nie został znaleziony!
echo ========================================
echo.
echo Zainstaluj Python z: https://www.python.org/
echo Lub upewnij się, że Python jest w PATH.
echo.
pause
exit /b 1

:menu
echo ========================================
echo LABORATORIUM NR 3 - Menu zadań
echo Python: %PYTHON_CMD%
echo ========================================
echo.
echo Wybierz zadanie do uruchomienia:
echo.
echo 1. Zadanie 1 - Kontrola paliwa
echo 2. Zadanie 2 - Liczby pierwsze
echo 3. Zadanie 3 - Lista adresów
echo 4. Zadanie 4 - Rachunek w restauracji
echo 5. Zadanie 5 - Lista liczb 80-0
echo 6. Zadanie 6 - Nieskończona pętla
echo 7. Zadanie 7A - Średnia punktów (while+continue)
echo 8. Zadanie 7B - Średnia punktów (break)
echo 9. Zadanie 8 - Praca z łańcuchem
echo 10. Zadanie 9 - Programy z łańcuchami
echo 11. Wszystkie zadania (bez wprowadzania danych)
echo 0. Wyjście
echo.
set /p wybor="Twój wybór (0-11): "

if "%wybor%"=="1" %PYTHON_CMD% zadanie_1.py
if "%wybor%"=="2" %PYTHON_CMD% zadanie_2.py
if "%wybor%"=="3" %PYTHON_CMD% zadanie_3.py
if "%wybor%"=="4" %PYTHON_CMD% zadanie_4.py
if "%wybor%"=="5" %PYTHON_CMD% zadanie_5.py
if "%wybor%"=="6" %PYTHON_CMD% zadanie_6.py
if "%wybor%"=="7" %PYTHON_CMD% zadanie_7a.py
if "%wybor%"=="8" %PYTHON_CMD% zadanie_7b.py
if "%wybor%"=="9" %PYTHON_CMD% zadanie_8.py
if "%wybor%"=="10" %PYTHON_CMD% zadanie_9.py
if "%wybor%"=="11" %PYTHON_CMD% main.py
if "%wybor%"=="0" exit

echo.
pause

