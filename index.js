/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');
var defaults = require('lodash.defaults');

module.exports = {
  name: 'plotly',

  included: function(app) {
    this._super.included.apply(this, arguments);

    // see: https://github.com/ember-cli/ember-cli/issues/3718
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }

    this.app = app;
    this.plotlyOptions = this.getConfig();

    var vendor = this.treePaths.vendor;
    
    app.import({
      development: vendor + '/plotly/plotly' + this.plotlyOptions.partialBundle + '.js',
      production: vendor + '/plotly/plotly' + this.plotlyOptions.partialBundle+ '.min.js'
    }, { prepend: true });

    return app;
  },

  getConfig: function() {
    var projectConfig = ((this.project.config(process.env.EMBER_ENV) || {}).plotly || {});
    if (projectConfig && projectConfig.hasOwnProperty('partialBundle') && projectConfig.partialBundle !== '') {
      projectConfig.partialBundle = '-' + projectConfig.partialBundle;
    }

    var plotlyPath = path.dirname(require.resolve('plotly.js'));

    var config = defaults(projectConfig, {
      plotlyPath: plotlyPath + '/../dist',
      partialBundle: ''
    });

    return config;
  },

  treeForVendor: function(vendorTree) {
    var trees = [];
    var options = this.plotlyOptions;

    if (vendorTree) {
      trees.push(vendorTree);
    }

    trees.push(new Funnel(options.plotlyPath, {
      destDir: 'plotly',
      include: ['plotly' + options.partialBundle + '.js', 'plotly' + options.partialBundle + '.min.js']
    }));

    return  mergeTrees(trees);
  }
};
