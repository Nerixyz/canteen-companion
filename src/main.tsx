import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './index.css';

const Index = React.lazy(() => import('./routes/Index'));
const router = createHashRouter([
  {
    path: '/',
    element: (
      <React.Suspense fallback={null}>
        <Index />
      </React.Suspense>
    ),
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
