import test from 'tape';
import React from 'react';
import { shallow } from 'enzyme';
import component from 'scripts/hello';

const $ = React.createElement;
const Comp = component(React);

const before = test;
const after = test;

before('description: hello', t => {
    t.end();
});

test('comp', t => {

    const props = {
        str: 'hello'
    };

    const actual = shallow($(Comp, props)).children().length,
        expect = 1;
    t.equal(actual, expect, 'should render correctly');
    t.end();
});

after('end test ---------------------------------------', t => {
    t.end();
});
