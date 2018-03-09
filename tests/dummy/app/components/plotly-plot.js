import Component from '@ember/component';
import layout from '../templates/components/plotly-plot';
import Plotly from 'plotly';

export default Component.extend({
  layout,
  didInsertElement() {
    const data = [{
      x: [1,2,3],
      y: [2,4,6],
      type: 'scatter'
    },{
      x: [0,10],
      y: [10,-10],
      type: 'scatter'
    }];
    const layout = {};
    const options = {};
    Plotly.newPlot(this.elementId, data, layout, options);
  }
});
