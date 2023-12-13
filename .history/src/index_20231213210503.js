import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HandleIdProvider } from './HandleContextId';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HandleIdContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HandleIdContext>
  </React.StrictMode>,
);