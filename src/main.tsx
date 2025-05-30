//
// main.tsx
//

import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client'

//
//

const element = document.querySelector('#root');
const root = ReactDOMClient.createRoot(element!);
root.render(
  <React.StrictMode>
    <div> Gonzo Solutions </div>
  </React.StrictMode>
);