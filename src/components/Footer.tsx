import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { Button } from 'react-aria-components';
import { useApp, useAppDispatch } from '../context/AppContext';

export function Footer() {
  const dp = useAppDispatch();
  const app = useApp();
  return (
    <div className="fixed bottom-3 right-3 rounded-full bg-slate-200 shadow-lg">
      <Button
        className="px-4 py-4"
        onPress={() =>
          dp({
            type: 'set-language',
            language: app.language === 'de' ? 'en' : 'de',
          })
        }
      >
        <GlobeAltIcon className="h-6 w-6" />
      </Button>
    </div>
  );
}
