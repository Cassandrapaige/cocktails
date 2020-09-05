import React from 'react'

import {ListContainer, ListItem} from './ingredient-list.styles'

const IngredientList = ({cocktail}) => {

    const ingredientList = cocktail => {
        let list = [];
        for(let i = 1; i < 15; i++) {
            if(cocktail[`strIngredient${i}`])
            list.push(<ListItem>{cocktail[`strMeasure${i}`]} {cocktail[`strIngredient${i}`]}</ListItem>)
        }
        return list;
    }

    return (
        <ListContainer>
            {ingredientList(cocktail)}
        </ListContainer>
    )
}

export default IngredientList;