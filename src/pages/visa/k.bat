@echo off
setlocal

set folder=C:\Users\rudrk\Downloads\nppm\src\pages\visa\visapages

mkdir "%folder%" 2>nul

for %%C in (
"UnitedArabEmirates"
"Thailand"
"Switzerland"
"UnitedStates"
"UnitedKingdom"
"Canada"
"Australia"
"Japan"
"France"
"Germany"
"Italy"
"Oman"
"HongKong"
"SouthKorea"
"Malaysia"
"Singapore"
"Turkey"
"SaudiArabia"
"Qatar"
"Netherlands"
"SouthAfrica"
) do (
  > "%folder%\%%C.tsx" echo const %%C = () => {
  >> "%folder%\%%C.tsx" echo   return ^<div^>%%C Visa Page^</div^>;
  >> "%folder%\%%C.tsx" echo };
  >> "%folder%\%%C.tsx" echo.
  >> "%folder%\%%C.tsx" echo export default %%C;
)

echo ✅ All country .tsx files created in %folder%
pause
