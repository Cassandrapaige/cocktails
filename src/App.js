import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios';

import './App.css';

import Navbar from './components/navbar/navbar.component';
import CocktailsList from './components/cocktails-list/cocktails-list.component'
import FavouritesList from './components/favourites-list/favourites-list.component';

const App = () => {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('items')).length || 0);

  const addToFavourites = (e, item, index) => {
    const itemToAdd = {
      item,
      isChecked: true,
      index
    }
    item.isChecked = true;
    items.push(itemToAdd);
    populateList();
  }

  const removeFromFavourites = (e, item) => {
    const index = e.target.dataset.index;
    items.splice(index, 1);
    populateList();
    console.log(items)
  }

  const populateList = () => {
    localStorage.setItem('items', JSON.stringify(items));
    setCount(JSON.parse(localStorage.getItem('items')).length);
  }
  
  return (
    <Router>
    <div className="App">
      <Navbar count = {count}/ >
      <Switch>
        <Route exact path = '/' render = {() => <CocktailsList handleClick = {addToFavourites}/>} />
        <Route exact path = '/favourites' render = {() => <FavouritesList handleClick = {removeFromFavourites}/>} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
