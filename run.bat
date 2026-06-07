@echo off
title Portfolio - Sium Ahameed
cd /d "E:\Desktop\Portfolio"
echo Building portfolio...
call npm run build
echo.
echo Starting server...
start /B cmd /c "node -e \"var h=require('http'),f=require('fs'),p=require('path');h.createServer(function(q,r){var s=p.join('out',q.url=='/'?'index.html':q.url);f.readFile(s,function(e,d){if(e){r.writeHead(404);r.end('404')}else{r.writeHead(200,{'Content-Type':{'html':'text/html','css':'text/css','js':'application/javascript','png':'image/png','jpg':'image/jpeg','svg':'image/svg+xml','mp3':'audio/mpeg'}[p.extname(s).slice(1)]||'text/plain'});r.end(d)}})}).listen(3000,function(){console.log('Server on :3000')})\"
timeout /t 3 /nobreak >nul
start http://localhost:3000
echo.
echo Server running at http://localhost:3000
echo Close this window to stop the server.
pause
