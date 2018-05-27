const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testApp = () => helpers.run(require.resolve('../generators/app'));

describe('generator-editorconfig:app', () => {
  it('creates `.editorconfig`', () =>
    testApp().then(() => {
      assert.file(['.editorconfig']);
    }));

  describe('with option `generateInto`', () => {
    it('creates `.editorconfig` in desired path', () =>
      testApp()
        .withOptions({
          generateInto: 'foo'
        })
        .then(() => {
          assert.file(['foo/.editorconfig']);
        }));
  });
});
