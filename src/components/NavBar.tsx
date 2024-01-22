import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { useApp, useAppDispatch } from '../context/AppContext';
import { useEffect, useState } from 'react';
import { animationInterval } from '../data/animation';
import clsx from 'clsx';

export default function NavBar() {
  const app = useApp();
  const dispatch = useAppDispatch();
  const [remaining, setRemaining] = useState('0:00');
  const [low, setLow] = useState(false);
  useEffect(() => {
    const update = () => {
      if (!app.user) {
        return;
      }
      const totalSecs =
        (Number(app.user.loginAt || 0) + 30000 - Date.now()) / 1000;
      if (totalSecs < 0) {
        if (window.parent) {
          window.parent.postMessage({ ev: 'unset-user' }, '*');
        }
        dispatch({ type: 'set-user', user: null });
      }

      const secs = totalSecs % 60 | 0;
      const minutes = (totalSecs / 60) | 0;

      setRemaining(`${minutes}:${secs < 10 ? '0' : ''}${secs}`);
      setLow(totalSecs < 10);
    };
    const ctrl = new AbortController();
    animationInterval(1000, ctrl.signal, update);
    update();

    () => ctrl.abort();
  }, [app.user, dispatch]);

  if (!app.user) {
    return null;
  }

  return (
    <>
      <nav className="fixed flex w-full gap-4 bg-white px-6 py-3">
        <UserIcon className="h-6 w-6" />
        <h4>{app.user.name}</h4>
        <div className="flex flex-grow justify-end gap-3">
          <ClockIcon className="h-6 w-6" />
          <span className={clsx('relative', low ? 'text-red-600' : '')}>
            {low ? (
              <span className="absolute animate-ping">{remaining}</span>
            ) : null}
            {remaining}
          </span>
        </div>
      </nav>
      <div className="h-14 w-full" />
    </>
  );
}
