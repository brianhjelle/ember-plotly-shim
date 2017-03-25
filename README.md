# ember-plotly-shim

ES6 accessible module for plotly.js within your Ember applications.

## Usage
* `ember install ember-plotly-shim`
By default, the main plotly bundle will be used.  To use a partial bundle, add a line like the one below in your config/environment.js file
```js
// config.environment.js
module.exports = function(environment) {
  return {
    plotly: {
      // Options:
      // basic, cartesian,
      // geo, gl3d, gl2d,
      // mapbox, finance
      partialBundle: 'basic'
    }
  };
}
```
For more information on partial bundles ->  https://github.com/plotly/plotly.js/blob/master/dist/README.md#bundle-information

Note: At this time, manually picking commonjs modules as discussed here https://github.com/plotly/plotly.js/#modules is not supported
