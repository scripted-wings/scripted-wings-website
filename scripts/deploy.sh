echo("Fetching code from git")
git pull

echo("Installing dependencies")
npm install

echo("Building the project")
npm run build

echo("Restarting the server")
pm2 restart 0