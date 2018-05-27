const path = require('path');
const assert = require('yeoman-assert');
const test = require('yeoman-test');

describe('generator-editorconfig:app', () => {

  it('creates `.editorconfig`', () => {
    return test
      .run(require.resolve('../generators/app'))
      .then(() => {
        assert.file(['.editorconfig']);
      });
  });

  describe('with option `generateInto`', () => {

    it('creates `.editorconfig` in desired path', () => {
      return test
        .run(require.resolve('../generators/app'))
        .withOptions({
          generateInto: 'foo'
        })
        .then(() => {
          assert.file(['foo/.editorconfig']);
        });
    });

  });

});
