import '@fontsource/inter';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import React, {
  IframeHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ActionsPopup from './components/ActionsPopup';
import { Footer } from './components/Footer';
import { AppProvider, useApp } from './context/AppContext';
import './index.css';

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
      <Root />
    </AppProvider>
  </React.StrictMode>,
);

function Root() {
  const app = useApp();
  const isEmbedded = location.search.startsWith('?embedded');
  const aRef = useRef<null | HTMLIFrameElement>(null);
  const bRef = useRef<null | HTMLIFrameElement>(null);

  const onload =
    (r: React.MutableRefObject<HTMLIFrameElement | null>) => () => {
      const l = (e: KeyboardEvent) => {
        if (
          !document.dispatchEvent(
            new KeyboardEvent('keydown', {
              ctrlKey: e.ctrlKey,
              key: e.key,
              cancelable: true,
            }),
          )
        ) {
          e.preventDefault();
        }
      };
      if (r.current?.contentWindow?.document) {
        r.current.contentWindow.document.addEventListener('keydown', l);
      }
    };

  return (
    <>
      {isEmbedded ? null : (
        <ActionsPopup
          commands={[
            {
              name: 'Set User',
              action: { type: 'set-user', user: { name: 'Max Mustermann' } },
            },
            { name: 'Clear User', action: { type: 'set-user', user: null } },
            { name: 'Split', action: { type: 'set-split', split: true } },
            { name: 'Unsplit', action: { type: 'set-split', split: false } },
          ]}
        />
      )}
      {app.isSplit ? (
        <div className="grid h-full w-full grid-cols-[1fr_1fr] overflow-auto">
          <iframe
            src={`/?embedded${app.language}`}
            title="Left"
            className="h-full w-full border-r-4 border-black"
            ref={aRef}
            onLoad={onload(aRef)}
          />
          <iframe
            src="/?embedded"
            title="Right"
            className="h-full w-full"
            ref={bRef}
            onLoad={onload(bRef)}
          />
        </div>
      ) : (
        <>
          <RouterProvider router={router} />
          <Footer />
        </>
      )}
    </>
  );
}
