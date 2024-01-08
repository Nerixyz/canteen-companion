import MenuOverview, { Menu } from '../components/MenuOverview';
import NavBar from '../components/NavBar';
import { menu } from '../data/menu';

export default function Index() {
  return (
    <div className="h-full">
      <NavBar />
      <MenuOverview items={menu} />
    </div>
  );
}
