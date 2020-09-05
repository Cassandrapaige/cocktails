import React from 'react'
import GridContainer from '../grid-container/grid-container.component';
import CocktailCard from '../cocktail-card/cocktail-card.component'

import {Memo} from './favourites-list.styles'

const FavouritesList = ({...rest}) => {
    const items = JSON.parse(localStorage.getItem('items')) || [];

    return (
        <GridContainer>
        <Memo>{items.length === 0 && "You haven't saved any cocktails yet..."}</Memo>
        {items.map((item, index) => (
            item && (              
               <CocktailCard 
                    key = {index}
                    data-index = {index}
                    cocktail = {item.item} 
                    title = ' Remove'
                    {...rest}
                />
            )
        ))} 
        </GridContainer>
    )
}

export default FavouritesList;