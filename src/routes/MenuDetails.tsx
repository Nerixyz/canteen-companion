import { useParams } from 'react-router-dom';
import { getMenuById } from '../data/menu';

export default function MenuDetails() {
  const params = useParams();
  const item = getMenuById(Number(params.id));

  return <div>{item.name}</div>;
}
