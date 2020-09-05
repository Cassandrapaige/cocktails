import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import CocktailsList from './components/cocktails-list/cocktails-list.component'

const App = () => {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('items')) || 0);

  const addToFavourites = item => {
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    setCount(JSON.parse(localStorage.getItem('items')))
}

  return (
    <div className="App">
      <Navbar count = {items.length}/ >
      <CocktailsList handleClick = {addToFavourites}/>
    </div>
  );
}

export default App;
