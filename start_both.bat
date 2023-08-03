@echo off

REM Start the client (React)
start cmd /c "cd client && npm install && npm start"

REM Sleep for a few seconds to ensure the client has started
timeout /t 5

REM Start the server (Node.js)
start cmd /c "cd server && npm install && npm start"
