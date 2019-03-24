import React from 'react';
import {render} from 'react-dom';
import App from 'app';

render(
  <div id="mount">
    <App />
  </div>,
  // document.body,
  document.getElementById('mount'),
);
