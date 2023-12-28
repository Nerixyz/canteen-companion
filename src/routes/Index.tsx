import MenuOverview, { Menu } from '../components/MenuOverview';
import NavBar from '../components/NavBar';

const menu: Menu = [
  [
    { name: 'Classic Margherita Pizza', price: 3.5 },
    { name: 'Vegetarian Pasta Salad', price: 4.0 },
    { name: 'Grilled Chicken Wrap', price: 5.2 },
    { name: 'Cheeseburger with Fries', price: 4.5 },
  ],
  [
    { name: 'Vegetable Stir-Fry', price: 3.8 },
    { name: 'Chicken Caesar Salad', price: 4.2 },
    { name: 'Tomato Basil Soup with Bread', price: 2.5 },
    { name: 'Spaghetti Bolognese', price: 3.7 },
  ],
  [
    { name: 'Falafel Pita Pocket', price: 4.0 },
    { name: 'Ham and Cheese Sandwich', price: 3.2 },
    { name: 'Vegetable Quesadilla', price: 4.3 },
    { name: 'Beef and Broccoli Rice Bowl', price: 5.0 },
  ],
  [
    { name: 'Caprese Panini', price: 3.8 },
    { name: 'Sweet Potato Fries', price: 2.8 },
    { name: 'Mushroom Risotto', price: 4.5 },
    { name: 'Tuna Salad Wrap', price: 3.9 },
  ],
  [
    { name: 'Egg Fried Rice', price: 3.5 },
    { name: 'Veggie Burger', price: 4.2 },
    { name: 'Chicken and Vegetable Kebabs', price: 5.5 },
    { name: 'Margherita Panzerotti', price: 3.0 },
  ],
  [
    { name: 'Greek Salad with Gyro Strips', price: 4.5 },
    { name: 'Potato Wedges with Dip', price: 2.8 },
    { name: 'Pesto Tortellini', price: 4.2 },
    { name: 'Beef Burrito', price: 4.5 },
  ],
  //   [
  //     { name: "Hawaiian Chicken Rice Bowl", price: 5.2 },
  //     { name: "Vegetable Spring Rolls", price: 3.0 },
  //     { name: "Tomato and Mozzarella Calzone", price: 3.8 },
  //     { name: "Chickpea and Spinach Curry", price: 4.0 },
  //     { name: "BLT Sandwich", price: 3.5 },
  //     { name: "Quinoa Salad with Avocado", price: 4.5 },
  //   ],
];

export default function Index() {
  return (
    <div className="h-full">
      <NavBar />
      <MenuOverview items={menu} />
    </div>
  );
}
