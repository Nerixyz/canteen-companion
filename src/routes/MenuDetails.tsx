import { useParams } from 'react-router-dom';
import { getMenuById } from '../data/menu';
import { CakeIcon } from '@heroicons/react/24/outline';

export default function MenuDetails() {
  const params = useParams();
  const item = getMenuById(Number(params.id));

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex w-full justify-center">
        <h3 className="pl-6 pt-10 font-bold"> {item.name} </h3>
      </div>
      <div className="flex w-full justify-center">
        <CakeIcon className="pt-10 m-2 h-auto w-96 rounded-md bg-white p-4 shadow-md" />
      </div>
      <div className="flex w-full justify-center"> 
        <p className="pl-6 pt-5 font-bold"> {item.price} €</p>
      </div>
      
    </div>
    
    
  );
}
