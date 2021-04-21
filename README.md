Deployment ->

Steps:

1. install gh-pages
2. add homepage field in package.json
3. add 2 more scripts in package.json
   for pre-deployment : npm run build
   for deployment: gh-pages -d build
   Note: it should have link to remote git repo
4. npm run deploy
