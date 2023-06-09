/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../jokes-ui.js';

suite('JokesUi', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<jokes-ui></jokes-ui>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
