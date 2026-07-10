@echo off
REM ===================================================
REM  Script para arreglar la carpeta "imagenes calzado"
REM  1) Agrega el cero a la izquierda (calzado-1 -> calzado-01)
REM  2) Borra el duplicado calzado-1.png
REM  3) Borra el archivo basura calzado-10-jpg
REM
REM  INSTRUCCIONES:
REM  - Copia este archivo DENTRO de la carpeta "images/imagenes calzado"
REM  - Dale doble clic para ejecutarlo
REM ===================================================

echo Renombrando archivos...

if exist "calzado-1.jpg" ren "calzado-1.jpg" "calzado-01.jpg"
if exist "calzado-3.jpg" ren "calzado-3.jpg" "calzado-03.jpg"
if exist "calzado-4.jpg" ren "calzado-4.jpg" "calzado-04.jpg"
if exist "calzado-5.jpg" ren "calzado-5.jpg" "calzado-05.jpg"
if exist "calzado-6.jpg" ren "calzado-6.jpg" "calzado-06.jpg"
if exist "calzado-7.jpg" ren "calzado-7.jpg" "calzado-07.jpg"
if exist "calzado-8.jpg" ren "calzado-8.jpg" "calzado-08.jpg"
if exist "calzado-9.jpg" ren "calzado-9.jpg" "calzado-09.jpg"

echo Borrando archivos duplicados o basura...

if exist "calzado-1.png" del "calzado-1.png"
if exist "calzado-10-jpg" del "calzado-10-jpg"

echo.
echo ✅ Listo! Revisa la carpeta para confirmar los cambios.
pause
