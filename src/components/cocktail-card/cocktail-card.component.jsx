import React from 'react'

import {CardContainer, Title} from './cocktail-card.styles'
import IngredientList from '../ingredient-list/ingredient-list.component';

const CocktailCard = ({cocktail, index, handleClick}) => {

    const randomNumber = () => Math.floor(Math.random() * 11) -5;

    return (
        <CardContainer 
            style = {{transform: `rotate(${randomNumber()}deg)`}} 
            data-index = {index} 
            onClick = {handleClick} 
            >
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <Title>{cocktail.strDrink}</Title>
            <IngredientList cocktail = {cocktail}/>
        </CardContainer>
    )
} 

export default CocktailCard;