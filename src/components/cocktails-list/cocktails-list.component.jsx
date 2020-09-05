import React from 'react'

import CocktailCard from '../cocktail-card/cocktail-card.component'

import {ListContainer} from './cocktails-list.styles'

const CocktailsList = ({list, num}) => {
    return (
        <ListContainer>
        {list.map((item, index) => (
            item && index != num && (              
               <CocktailCard cocktail = {item} />
            )
        ))}
        </ListContainer>
    )
}

export default CocktailsList;
