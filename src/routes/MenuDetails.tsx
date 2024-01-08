import {
  CakeIcon,
  ChevronLeftIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconFilled } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-aria-components';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useApp } from '../context/AppContext';
import { getMenuById } from '../data/menu';

const trStrings = {
  ingr: ['Zutaten', 'Ingredients'],
  rating: ['Bewertung', 'Rating'],
  wasOkay: [
    'War diese Empfehlung hilfreich?',
    'Was this recommendation helpful?',
  ],
  yes: ['Ja', 'Yes'],
  no: ['Nein', 'No'],
} as const;

function trIt(it: keyof typeof trStrings, lang: 'de' | 'en') {
  return trStrings[it][lang === 'de' ? 0 : 1];
}

const currencyOpts = { currency: 'EUR', style: 'currency' };
const dcf = new Intl.NumberFormat('de-DE', currencyOpts);
const ecf = new Intl.NumberFormat('en-GB', currencyOpts);

export default function MenuDetails() {
  const params = useParams();
  const item = getMenuById(Number(params.id));
  const app = useApp();
  const tr = (it: keyof typeof trStrings) => trIt(it, app.language);
  const cf = app.language === 'de' ? dcf : ecf;
  const nav = useNavigate();

  return (
    <>
      <NavBar />
      <div className="relative flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <h3 className="pl-6 pt-8 font-bold">
            {app.language === 'de' ? item.germanName : item.name}
          </h3>
        </div>
        <div className="mt-4 flex justify-center rounded-md bg-slate-50 p-6 shadow-md">
          <CakeIcon className="h-auto w-80" />
        </div>
        <div className="flex w-full justify-center">
          <p className="pl-6 pt-5 font-bold">{cf.format(item.price)}</p>
        </div>
        <div className="flex w-full justify-center">
          <p className="pl-6 pt-10">
            <span className="mr-3 font-bold">{tr('ingr')}:</span>
            {(app.language === 'de'
              ? item.germanIngredients
              : item.ingredients
            ).join(', ')}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-16">
          <div className="flex flex-col items-center gap-2">
            <span className="font-bold">{tr('rating')}</span>
            <div className="flex gap-1">
              <Rating />
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            {tr('wasOkay')}
            <div className="flex gap-4">
              <Button className="ml-1 hover:text-yellow-500">
                {tr('yes')}
              </Button>
              <Button className="ml-1 hover:text-yellow-500">{tr('no')}</Button>
            </div>
          </div>
        </div>
        <div className="absolute left-3 top-3">
          <Button
            onPress={() => history.back()}
            className="rounded-full bg-slate-200 px-4 py-4 shadow-lg hover:bg-slate-400"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
}

function Rating() {
  const [rating, setRating] = useState(0);
  return new Array(5).fill(null).map((_, i) => (
    <Button
      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
      key={i}
      className={clsx(
        i < rating
          ? 'text-yellow-500 hover:text-black'
          : 'hover:text-yellow-500',
      )}
      onPress={() => setRating(i + 1)}
    >
      {i < rating ? (
        <StarIconFilled className="h-4 w-4" />
      ) : (
        <StarIcon className="h-4 w-4" />
      )}
    </Button>
  ));
}
