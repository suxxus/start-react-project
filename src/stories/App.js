import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from '../scripts/components/App';

const $ = React.createElement;

storiesOf('app', module)
    .add('App', () => {
      const props = {
        text: 'my day',
      };

      return $(App(React), props);
    });
