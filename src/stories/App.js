import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Hello from '../scripts/hello.js';

const hello = Hello(React);

const $ = React.createElement;

storiesOf('App', module)
    .add('Hello', () => {

        const props = {
            str: 'Hello World!!'
        };

        return $(hello, props);
    });
