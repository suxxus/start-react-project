import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import app from 'scripts/components/App';

const $ = React.createElement;
const App = app(React);

const describe = test;

describe('description: App', (t) => {
  t.end();
});

test('should have the correct text', (t) => {
  const msg = 'text is hello word';

  const props = {
    text: 'hello word',
  };

  const actual = shallow($(App, props)).find('div').text();
  const expect = 'hello word';

  t.equal(actual, expect, msg);
  t.end();
});
