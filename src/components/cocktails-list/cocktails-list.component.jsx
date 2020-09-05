import React, {useEffect, useState} from 'react'
import axios from 'axios'

import CocktailCard from '../cocktail-card/cocktail-card.component'

import GridContainer from '../grid-container/grid-container.component'

import {Memo} from './cocktails-list.styles'
import SelectedCocktail from '../selected-cocktail/selected-cocktail.component'

const CocktailsList = ({title, handleClick, ...rest}) => {
    const [cocktailList, setCocktailList] = useState([]);
    const [num, setNum] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('items')) || 0);
    
    useEffect(() => {
        setIsLoading(true);
        let list = [];
        for(let char of 'abcdefghijklmnopqrstuvwxyz') 
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`)
            .then(result => {
                list.push(result.data.drinks);
                setCocktailList([].concat.apply([], list));
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500)
          })
    }, [])
  
    const sortedList = cocktailList.sort((a, b) => {
      let textA = a && a.strDrink.toUpperCase();
      let textB = b && b.strDrink.toUpperCase();
      return (textA < textB ? -1 : 1);
  });
  
  const setSelected = index => {
      setNum(index);
      window.scrollTo(0, 0);
  }

  const sortedAlcoholicList = sortedList.filter(el => el && el.strAlcoholic === 'Alcoholic')

    return (
        <>
        <SelectedCocktail list = {sortedAlcoholicList} num = {num} setNum = {setNum} handleClick = {handleClick} {...rest}/>
        <GridContainer>
            {sortedAlcoholicList.map((item, index) => (
            item && index != num && (              
               <CocktailCard 
                    setSelected = {() => setSelected(index)}
                    key = {index}
                    cocktail = {item} 
                    index = {index}
                    title = {item.isChecked ? ' Added!' : ' Add to favourites'}
                    handleClick = {handleClick}
                    {...rest}
                />
            )
        ))}
        </GridContainer>
        </>
    )
}

export default CocktailsList;
