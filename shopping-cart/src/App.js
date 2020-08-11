import React from 'react';
import './App.css';
import Cart from './Cart';

const items = [
  { id:1, name: 'Taco Seasoning', price: 2.25, qty:2 },
  { id:2, name: 'Pinto Beans', price: 1.25, qty:3 },
  { id:3, name: 'Sour Cream', price: 3.5, qty:1 },
]
// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];

function App() {
  return (
    <div>
      <Cart items={items}></Cart>
    </div>
  );
}

export default App;
