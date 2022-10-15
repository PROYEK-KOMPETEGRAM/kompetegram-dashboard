import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoute } from './Routes';
import 'tw-elements';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
)
