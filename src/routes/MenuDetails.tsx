import { useParams } from 'react-router-dom';
import { getMenuById } from '../data/menu';
import { CakeIcon } from '@heroicons/react/24/outline';
import { Button } from 'react-aria-components';

export default function MenuDetails() {
  const params = useParams();
  const item = getMenuById(Number(params.id));

  return (
    <div className="flex w-full flex-col justify-center">
      <div className="flex w-full justify-center">
        <h3 className="pl-6 pt-10 font-bold"> {item.name} </h3>
      </div>
      <div className="flex w-full justify-center">
        <CakeIcon className="m-2 h-auto w-96 rounded-md bg-white p-4 pt-10 shadow-md" />
      </div>
      <div className="flex w-full justify-center">
        <p className="pl-6 pt-5 font-bold"> {item.price} €</p>
      </div>
      <div className="flex w-full justify-center">
        <p className="pl-6 pt-10 font-bold">
          {' '}
          Zutaten:{' '}
          {item.ingredients.map(i => (
            <span className="m-0.5 font-normal"> {i}, </span>
          ))}
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full justify-center">
          {' '}
          Bewertung:{' '}
          <Button className="hover:text-yellow-500"> &#x2605; </Button>{' '}
          <Button className="hover:text-yellow-500"> &#x2605; </Button>{' '}
          <Button className="hover:text-yellow-500"> &#x2605; </Button>{' '}
          <Button className="hover:text-yellow-500"> &#x2605; </Button>{' '}
          <Button className="hover:text-yellow-500"> &#x2605; </Button>{' '}
          <span className="mr-4"> </span> War diese Empfehlung hilfreich?{' '}
          <Button className="ml-1 hover:text-yellow-500"> Ja! </Button>{' '}
          <Button className="ml-1 hover:text-yellow-500"> Nein. </Button>{' '}
        </div>
      </div>
    </div>
  );
}
