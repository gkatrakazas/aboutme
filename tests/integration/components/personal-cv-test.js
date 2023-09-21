import { module, test } from 'qunit';
import { setupRenderingTest } from 'personal-page-cv/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | personal-cv', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PersonalCv />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <PersonalCv>
        template block text
      </PersonalCv>
    `);

    assert.dom().hasText('template block text');
  });
});
