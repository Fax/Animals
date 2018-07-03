require('./styles/app.scss');
import angular from 'angular';




export const app = angular.module('AnimalApp', []);


// now we need to import all components we are going to use in the app.
// a quick way to do that is to require all js files in the components folder.

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./components', true, /\.js$/))
requireAll(require.context('./services', true, /\.js$/))

// now we tell the application to run a function on startup


const applicationStartup = () => {
  console.log('the application is started');
};

// and run!
app.run(applicationStartup);