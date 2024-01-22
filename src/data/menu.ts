import { Menu, MenuItem } from '../components/MenuOverview';

const items: MenuItem[] = [
  {
    id: 0,
    name: 'Classic Margherita Pizza',
    germanName: 'Klassische Margherita Pizza',
    price: 3.5,
    ingredients: ['Tomato Sauce', 'Mozzarella Cheese', 'Fresh Basil'],
    germanIngredients: ['Tomatensauce', 'Mozzarellakäse', 'frisches Basilikum'],
  },
  {
    id: 1,
    name: 'Vegetarian Pasta Salad',
    germanName: 'Vegetarischer Nudelsalat',
    price: 4.0,
    ingredients: ['Pasta', 'Mixed Vegetables', 'Italian Dressing'],
    germanIngredients: [
      'Nudeln',
      'Gemischtes Gemüse',
      'Italienisches Dressing',
    ],
  },
  {
    id: 2,
    name: 'Grilled Chicken Wrap',
    germanName: 'Gegrilltes Hähnchen-Wrap',
    price: 5.2,
    ingredients: ['Grilled Chicken', 'Flour Tortilla', 'Salsa'],
    germanIngredients: ['Gegrilltes Hähnchen', 'Mehltortilla', 'Salsa'],
  },
  {
    id: 3,
    name: 'Cheeseburger with Fries',
    germanName: 'Cheeseburger mit Pommes',
    price: 4.5,
    ingredients: ['Beef Patty', 'Cheese', 'French Fries'],
    germanIngredients: ['Rindfleisch-Patty', 'Käse', 'Pommes Frites'],
  },
  {
    id: 4,
    name: 'Vegetable Stir-Fry',
    germanName: 'Gemüsepfanne',
    price: 3.8,
    ingredients: ['Assorted Vegetables', 'Soy Sauce', 'Rice'],
    germanIngredients: ['Verschiedenes Gemüse', 'Sojasauce', 'Reis'],
  },
  {
    id: 5,
    name: 'Chicken Caesar Salad',
    germanName: 'Hähnchen Caesar Salat',
    price: 4.2,
    ingredients: ['Grilled Chicken', 'Romaine Lettuce', 'Caesar Dressing'],
    germanIngredients: ['Gegrilltes Hähnchen', 'Römersalat', 'Caesar-Dressing'],
  },
  {
    id: 6,
    name: 'Tomato Basil Soup with Bread',
    germanName: 'Tomaten-Basilikum Suppe mit Brot',
    price: 2.5,
    ingredients: ['Tomatoes', 'Basil', 'Bread'],
    germanIngredients: ['Tomaten', 'Basilikum', 'Brot'],
  },
  {
    id: 7,
    name: 'Spaghetti Bolognese',
    germanName: 'Spaghetti Bolognese',
    price: 3.7,
    ingredients: ['Spaghetti', 'Ground Beef', 'Tomato Sauce'],
    germanIngredients: ['Spaghetti', 'Hackfleisch', 'Tomatensauce'],
  },
  {
    id: 8,
    name: 'Falafel Pita Pocket',
    germanName: 'Falafel Pita Tasche',
    price: 4.0,
    ingredients: ['Falafel', 'Pita Bread', 'Tahini Sauce'],
    germanIngredients: ['Falafel', 'Pita-Brot', 'Tahini-Sauce'],
  },
  {
    id: 9,
    name: 'Ham and Cheese Sandwich',
    germanName: 'Schinken-Käse-Sandwich',
    price: 3.2,
    ingredients: ['Ham', 'Cheese', 'Bread'],
    germanIngredients: ['Schinken', 'Käse', 'Brot'],
  },
  {
    id: 10,
    name: 'Vegetable Quesadilla',
    germanName: 'Gemüse Quesadilla',
    price: 4.3,
    ingredients: ['Assorted Vegetables', 'Cheese', 'Flour Tortilla'],
    germanIngredients: ['Verschiedenes Gemüse', 'Käse', 'Mehltortilla'],
  },
  {
    id: 11,
    name: 'Beef and Broccoli Rice Bowl',
    germanName: 'Rindfleisch-Brokkoli Reisschüssel',
    price: 5.0,
    ingredients: ['Beef Strips', 'Broccoli', 'Rice'],
    germanIngredients: ['Rindfleischstreifen', 'Brokkoli', 'Reis'],
  },
  {
    id: 12,
    name: 'Caprese Panini',
    germanName: 'Caprese Panini',
    price: 3.8,
    ingredients: ['Tomato', 'Mozzarella Cheese', 'Basil Pesto'],
    germanIngredients: ['Tomate', 'Mozzarellakäse', 'Basilikumpesto'],
  },
  {
    id: 13,
    name: 'Sweet Potato Fries',
    germanName: 'Süßkartoffel Pommes',
    price: 2.8,
    ingredients: ['Sweet Potatoes', 'Olive Oil', 'Seasonings'],
    germanIngredients: ['Süßkartoffeln', 'Olivenöl', 'Gewürze'],
  },
  {
    id: 14,
    name: 'Mushroom Risotto',
    germanName: 'Pilzrisotto',
    price: 4.5,
    ingredients: ['Arborio Rice', 'Mushrooms', 'Parmesan Cheese'],
    germanIngredients: ['Arborio-Reis', 'Champignons', 'Parmesan-Käse'],
  },
  {
    id: 15,
    name: 'Tuna Salad Wrap',
    germanName: 'Thunfischsalat Wrap',
    price: 3.9,
    ingredients: ['Tuna', 'Mixed Greens', 'Tortilla Wrap'],
    germanIngredients: ['Thunfisch', 'Gemischter Salat', 'Tortilla Wrap'],
  },
  {
    id: 16,
    name: 'Egg Fried Rice',
    germanName: 'Ei gebratener Reis',
    price: 3.5,
    ingredients: ['Eggs', 'Rice', 'Soy Sauce'],
    germanIngredients: ['Eier', 'Reis', 'Sojasauce'],
  },
];

for (let i = 0; i < items.length; i++) {
  items[i].id = i;
}

export const menu: Menu = new Array(7)
  .fill(null)
  .map((_, i) => items.slice(i * 4, (i + 1) * 4)) as Menu;

export function getMenuById(id: number) {
  return items[id];
}

export function imagePathForId(id: number) {
  return `/res/m${id}.webp`;
}
