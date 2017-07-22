# Getting Started
## Dependencies
Tools needed to run this app:
* `node` and `npm`

## Installing
* `npm install` to install dependencies

## Running the App
* `npm start` or `gulp`

### Tasks
Here's a list of available tasks:
* `npm run build`
  * runs Webpack, which will transpile, concatenate, and compress (collectively, "bundle") all assets and modules into `dist/bundle.js`. It also prepares `index.html` to be used as application entry point, links assets and created dist version of our application.
* `npm start` (which is the default task that runs when typing `gulp` without providing an argument)
  * starts a dev server via `webpack-dev-server`, serving the client folder.
  
