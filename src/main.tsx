import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoute } from './Routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'tw-elements';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './commons/config/api';
import { StateContextProvider } from './commons/context/provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateContextProvider>
        <BrowserRouter>
          <AppRoute />
          <ReactQueryDevtools initialIsOpen={false} />
        </BrowserRouter>
      </StateContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
