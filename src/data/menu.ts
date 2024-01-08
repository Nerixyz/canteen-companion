import { Menu, MenuItem } from '../components/MenuOverview';

const items: MenuItem[] = [
  { id: 0, name: 'Classic Margherita Pizza', price: 3.5 },
  { id: 0, name: 'Vegetarian Pasta Salad', price: 4.0 },
  { id: 0, name: 'Grilled Chicken Wrap', price: 5.2 },
  { id: 0, name: 'Cheeseburger with Fries', price: 4.5 },
  { id: 0, name: 'Vegetable Stir-Fry', price: 3.8 },
  { id: 0, name: 'Chicken Caesar Salad', price: 4.2 },
  { id: 0, name: 'Tomato Basil Soup with Bread', price: 2.5 },
  { id: 0, name: 'Spaghetti Bolognese', price: 3.7 },
  { id: 0, name: 'Falafel Pita Pocket', price: 4.0 },
  { id: 0, name: 'Ham and Cheese Sandwich', price: 3.2 },
  { id: 0, name: 'Vegetable Quesadilla', price: 4.3 },
  { id: 0, name: 'Beef and Broccoli Rice Bowl', price: 5.0 },
  { id: 0, name: 'Caprese Panini', price: 3.8 },
  { id: 0, name: 'Sweet Potato Fries', price: 2.8 },
  { id: 0, name: 'Mushroom Risotto', price: 4.5 },
  { id: 0, name: 'Tuna Salad Wrap', price: 3.9 },
  { id: 0, name: 'Egg Fried Rice', price: 3.5 },
  { id: 0, name: 'Veggie Burger', price: 4.2 },
  { id: 0, name: 'Chicken and Vegetable Kebabs', price: 5.5 },
  { id: 0, name: 'Margherita Panzerotti', price: 3.0 },
  { id: 0, name: 'Greek Salad with Gyro Strips', price: 4.5 },
  { id: 0, name: 'Potato Wedges with Dip', price: 2.8 },
  { id: 0, name: 'Pesto Tortellini', price: 4.2 },
  { id: 0, name: 'Beef Burrito', price: 4.5 },
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
