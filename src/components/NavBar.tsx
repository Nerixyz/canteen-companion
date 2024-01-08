import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { useApp } from '../context/AppContext';

export default function NavBar() {
  const app = useApp();
  if (!app.user) {
    return null;
  }
  return (
    <nav className="flex w-full gap-4 px-6 py-3">
      <UserIcon className="h-6 w-6" />
      <h4>{app.user.name}</h4>
      <div className="flex flex-grow justify-end gap-3">
        <ClockIcon className="h-6 w-6" />
        0:00
      </div>
    </nav>
  );
}
