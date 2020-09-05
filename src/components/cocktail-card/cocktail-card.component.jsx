import React from 'react'

import {CardContainer, Title, CardLogo} from './cocktail-card.styles'
import IngredientList from '../ingredient-list/ingredient-list.component';
import CustomButton from '../custom-button/custom-button.component';

const CocktailCard = ({cocktail, index, setSelected, ...rest}) => {

    const randomNumber = () => Math.floor(Math.random() * 11) -5;

    return (
        <CardContainer 
            style = {{transform: `rotate(${randomNumber()}deg)`}} 
            data-index = {index} 
            >
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} onClick = {setSelected} style= {{cursor: 'pointer'}}/>
            <Title>{cocktail.strDrink}</Title>
            <IngredientList cocktail = {cocktail}/>
            <CardLogo src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Finger_heart.png" alt={cocktail.strDrink}/>
            <CustomButton item = {cocktail} index = {index} {...rest}/>
        </CardContainer>
    )
} 

export default CocktailCard;