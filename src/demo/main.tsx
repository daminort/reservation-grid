import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'demo/containers/App';
import 'demo/reset.css';
import 'demo/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
