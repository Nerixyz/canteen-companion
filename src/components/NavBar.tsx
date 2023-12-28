import { ClockIcon, UserIcon } from '@heroicons/react/24/outline';
import { useApp } from '../context/AppContext';

export default function NavBar() {
  const app = useApp();
  if (!app.user) {
    return null;
  }
  return (
    <nav>
      <UserIcon className="h-6 w-6" />
      <h4>{app.user.name}</h4>
      <div>
        <ClockIcon />
      </div>
    </nav>
  );
}
