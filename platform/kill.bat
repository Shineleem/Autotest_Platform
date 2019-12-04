@echo off
for /l %%i in (1,1,5) do (
	TASKKILL /F /FI "WINDOWTITLE eq startatxserver2.bat"
	)
taskkill /f /im rethinkdb.exe
for /l %%i in (1,1,5) do (
	TASKKILL /F /FI "WINDOWTITLE eq atxserver2-android-provider.bat"
	)
for /l %%i in (1,1,5) do (
	TASKKILL /F /FI "WINDOWTITLE eq runserver.bat"
	)
