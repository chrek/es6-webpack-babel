## ES6 with Webpack and Babel

This project is used to setup a project that uses ES6, Webpack
and Babel.

It could be used as the starting block for a project with features around ECMAScript 6 (ECMAScript 2015). 

Webpack is used as a JavaScript bundler for web application.

Babel is a JavaScript compiler and is used here for transpiling ECMAScript 2015+ code for compatible version of JavaScript in current and older browsers or environments.

The use of Babel is set up via config; see the rules array of the module object for module.exports in the webpack.config.js file.

We have also added presets to Babel to take care of different upcoming JavaScript features. Specifically, we and using the  env preset in .babelrc file, to enable transforms for ES2015+.

## In Dev mode:

We have setup webpack-dev-server that provides a simple web server and the ability to use live reloading.

Run `npm start` from the command line to start the server.

The browser loads the web page automatically and the server reloads in response to changes in the source files after code recomplilation.

## References

1. [robinwieruch](https://www.robinwieruch.de/webpack-babel-setup-tutorial)
2. [developer.mozilla](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
3. [developer.mozilla](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
