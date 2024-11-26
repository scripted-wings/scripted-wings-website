#!/bin/bash
set -e  # Exit script on any command failure

echo "Fetching code from git"
git pull

echo "Installing dependencies"
npm install

echo "Building the project"
npm run build

echo "Restarting the server"
pm2 restart scripted-wings-website