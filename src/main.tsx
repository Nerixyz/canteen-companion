import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './index.css';
import ActionsPopup from './components/ActionsPopup';

const Index = React.lazy(() => import('./routes/Index'));
const MenuDetails = React.lazy(() => import('./routes/MenuDetails'));
const router = createHashRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={null}>
            <Index />
          </React.Suspense>
        ),
      },
      {
        path: '/:id',
        element: (
          <React.Suspense fallback={null}>
            <MenuDetails />
          </React.Suspense>
        ),
      },
    ],
  },
]);

const container = document.getElementById('root');
// biome-ignore lint/style/noNonNullAssertion: <explanation>
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <AppProvider>
      <ActionsPopup commands={[]} />
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
