import React from 'react';
import hello from 'scripts/hello';
import { render } from 'react-dom';

const Hello = hello(React);

const props = {
    str: 'hello world!'
};

render( <Hello {...props }/>,
    document.querySelector('#root'));
