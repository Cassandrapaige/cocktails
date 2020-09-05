import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import CocktailsList from './components/cocktails-list/cocktails-list.component'

function App() {
  const [cocktailList, setCocktailList] = useState([]);
  const [num, setNum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
      let list = [];
      for(let char of 'abcdefghijklmnopqrstuvwxyz') 
          axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`)
          .then(result => {
              list.push(result.data.drinks);
              setCocktailList([].concat.apply([], list));
              setIsLoading(false);
        })
  }, [])

  const sortedList = cocktailList.sort((a, b) => {
    let textA = a && a.strDrink.toUpperCase();
    let textB = b && b.strDrink.toUpperCase();
    return (textA < textB ? -1 : 1);
});

const sortedAlcoholicList = sortedList.filter(el => el && el.strAlcoholic === 'Alcoholic')

  return (
    <div className="App">
      <Navbar/ >
      <CocktailsList list = {sortedAlcoholicList} num={num}/>
    </div>
  );
}

export default App;
