import React, {useEffect, useState} from 'react'
import axios from 'axios'

import CocktailCard from '../cocktail-card/cocktail-card.component'

import GridContainer from '../grid-container/grid-container.component'

const CocktailsList = ({...rest}) => {
    const [cocktailList, setCocktailList] = useState([]);
    const [num, setNum] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState(' Add to Favourites');
  
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
        <GridContainer>
        {sortedAlcoholicList.map((item, index) => (
            item && index != num && (              
               <CocktailCard 
                    key = {index}
                    cocktail = {item} 
                    type = 'add'
                    title = {title}
                    {...rest}
                />
            )
        ))}
        </GridContainer>
    )
}

export default CocktailsList;
