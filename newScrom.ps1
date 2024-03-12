npm run build
Copy-Item -Path ".\dist\" -Destination "C:\Users\MadorTil\Documents\projects\SCROM\on-time SCROM\web\" -Recurse -Force
Compress-Archive -Path "C:\Users\MadorTil\Documents\projects\SCROM\on-time SCROM\" -Update  -DestinationPath "C:\Users\MadorTil\Documents\projects\SCROM\on-time SCROM.zip"
explorer "C:\Users\MadorTil\Documents\projects\SCROM\"
Write-Host "zip finished"