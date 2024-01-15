import { CakeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export interface MenuItem {
  name: string;
  germanName: string;
  price: number;
  ingredients: string[];
  germanIngredients: string[];
  id: number;
}

type MenuItems = Array<MenuItem>;
export type Menu = [
  MenuItems,
  MenuItems,
  MenuItems,
  MenuItems,
  MenuItems,
  MenuItems,
];

function formatWeekday(lang: 'en' | 'de', day: number) {
  if (lang === 'en') {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ][day % 7];
  }
  return [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ][day % 7];
}

function offsetMap<T, U>(
  arr: T[],
  offset: number,
  fn: (it: T, day: number) => U,
) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const day = (i + offset) % arr.length;
    mapped.push(fn(arr[day], day));
  }
  return mapped;
}

const currencyOpts = { currency: 'EUR', style: 'currency' };
const dcf = new Intl.NumberFormat('de-DE', currencyOpts);
const ecf = new Intl.NumberFormat('en-GB', currencyOpts);

export default function MenuOverview({ items }: { items: Menu }) {
  const app = useApp();
  const offset = new Date().getDay();
  return (
    <>
      <main className="grid grid-flow-row grid-cols-[auto,minmax(0,_1fr)] gap-16 px-10 py-5">
        {offsetMap(items, offset, (it, day) =>
          it.length === 0 ? null : (
            <React.Fragment key={day}>
              <h3 className="pl-6 pt-4 text-lg font-semibold">
                {formatWeekday(app.language, day)}
              </h3>
              <div className="flex items-center gap-8">
                {it.map((item, i) => {
                  const C = i === 0 ? FocusedMenuItem : MenuItem;
                  return (
                    <Link to={`/${item.id}`} key={item.id}>
                      <C item={item} lang={app.language} />
                    </Link>
                  );
                })}
              </div>
            </React.Fragment>
          ),
        )}
      </main>
      {/* <div className="h-4 w-full" /> */}
    </>
  );
}

interface ItemProps {
  item: MenuItem;
  lang: 'de' | 'en';
}

function MenuItem({ item, lang }: ItemProps) {
  const cf = lang === 'de' ? dcf : ecf;
  return (
    <div className="border-b-4 border-blue-500 px-4 py-2 shadow-md transition-colors hover:bg-slate-100 hover:shadow-lg">
      <div className="flex w-full justify-center">
        <CakeIcon className="m-2 h-20 w-20 rounded-md bg-slate-100 p-4" />
      </div>
      <h5>{lang === 'de' ? item.germanName : item.name}</h5>
      <div>{cf.format(item.price)}</div>
    </div>
  );
}

function FocusedMenuItem({ item, lang }: ItemProps) {
  const cf = lang === 'de' ? dcf : ecf;
  return (
    <div className="border-b-4 border-blue-500 bg-yellow-100 bg-sparkles-pattern bg-[length:5rem] bg-repeat px-8 py-6 shadow-md transition-colors hover:bg-yellow-200 hover:shadow-lg">
      <div className="flex w-full justify-center">
        <CakeIcon className="m-2 h-20 w-20 rounded-md bg-white p-4 shadow-md" />
      </div>
      <h5>{lang === 'de' ? item.germanName : item.name}</h5>
      <div>{cf.format(item.price)}</div>
    </div>
  );
}
