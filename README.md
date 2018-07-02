# DEPRECATED

This project has been deprecated.

This addon is no longer actively developed.  But we'll still keep it here.

## Why is it being deprecated?

After [ember-auto-import](https://github.com/ef4/ember-auto-import) was introduced, it is no longer necessary to shim plotly.js in order to get it to work with ember.  You can simply import the javascript file from the plotly.js bundle you need.

## How can I do this?

If you want to import the basic bundle from plotly.js you use the following line.

```ember install ember-auto-import```

Then add this line to the top of your js file in which your are referencing the Plotly object.

```import Plotly from 'plotly.js/dist/plotly-basic.min.js';```

Just choose the javascript file from the plotly.js/dist file that suits your needs.  For performance reasons, it's best if you import the smallest bundle that meets your use case.

# ember-plotly-shim

ES6 accessible module for plotly.js within your Ember applications.
Warning: This is a work in progress
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
Then import plotly like the line below in a js file:
```js
import Plotly from 'plotly';
```
For more information on partial bundles ->  https://github.com/plotly/plotly.js/blob/master/dist/README.md#bundle-information

Note: At this time, manually picking commonjs modules as discussed here https://github.com/plotly/plotly.js/#modules is not supported

This project is licensed under the [MIT License](LICENSE.md).
