import { CakeIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';

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
    ][day];
  }
  return [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ][day];
}

export default function MenuOverview({ items }: { items: Menu }) {
  return (
    <main className="grid h-full grid-flow-row grid-cols-[auto,minmax(0,_1fr)] gap-16 overflow-auto px-10 py-5">
      {items.map((it, day) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: The length is static
        <React.Fragment key={day}>
          <h3 className="pl-6 pt-4 text-lg font-semibold">
            {formatWeekday('en', day)}
          </h3>
          <div className="flex items-center gap-8">
            {it.map((item, i) =>
              i === 0 ? (
                <FocusedMenuItem key={item.name} item={item} />
              ) : (
                <MenuItem key={item.name} item={item} />
              ),
            )}
          </div>
        </React.Fragment>
      ))}
    </main>
  );
}

function MenuItem({ item }: { item: MenuItem }) {
  return (
    <div className="border-b-4 border-blue-500 px-4 py-2 shadow-md">
      <div className="flex w-full justify-center">
        <CakeIcon className="m-2 h-20 w-20 rounded-md bg-slate-100 p-4" />
      </div>
      <h5>{item.name}</h5>
      <div>{item.price}</div>
    </div>
  );
}

function FocusedMenuItem({ item }: { item: MenuItem }) {
  return (
    <div className="border-b-4 border-blue-500 bg-yellow-100 bg-sparkles-pattern bg-[length:5rem] bg-repeat px-8 py-6 shadow-md">
      <div className="flex w-full justify-center">
        <CakeIcon className="m-2 h-20 w-20 rounded-md bg-white p-4 shadow-md" />
      </div>
      <h5>{item.name}</h5>
      <div>{item.price}</div>
    </div>
  );
}
