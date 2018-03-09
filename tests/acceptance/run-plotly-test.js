import { module, test } from 'qunit';
import { visit, currentURL, waitFor } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | run plotly', function(hooks) {
  setupApplicationTest(hooks);

  test('Make sure we can draw a basic plot', async function(assert) {
    await visit('/smoke-test');

    assert.equal(currentURL(), '/smoke-test');
    await waitFor('svg');
    assert.equal(this.element.querySelectorAll('.plot g.scatterlayer g.trace.scatter').length, 2, 'should be 2 traces');
    assert.equal(this.element.querySelectorAll('.legendtoggle').length, 2, 'should be 2 legend entries');
  });
});
