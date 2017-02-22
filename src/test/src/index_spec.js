import test from 'tape';
import app from 'scripts/index';

const describe = test;

describe('description: app', (assert) => {
  assert.end();
});

test('identity', (assert) => {
  const msg = 'should return the passed value';
  const actual = app(1);
  const expect = 1;

  assert.equal(actual, expect, msg);

  assert.end();
});
