import React from 'react'
import IngredientList from '../ingredient-list/ingredient-list.component';

import {SelectedContainer, 
        Title, 
        Heading, 
        RecipeContainer, 
        CocktailInfo, 
        ButtonContainer, 
        CardLogo} from './selected-cocktail.styles'
import CustomButton from '../custom-button/custom-button.component';

const SelectedCocktail = ({list, num, setNum, handleClick}) => {
    const setSlideNum = (type, list) => {
        if(type === 'next' && num != list.length -1) {
            setNum(prev => prev + 1)
        }

        if(type === 'next' && num == list.length -1){
            setNum(0)
        } 
        
        if(type === 'prev' && num != 0){
            setNum(prev => prev - 1)
        } 
        
        if(type === 'prev' && num == 0){
            setNum(list.length -1)
        }
    }

    return (
        <SelectedContainer>
            {list.map((cocktail, index, ...rest) => (
                cocktail && index == num && (  
                    <>
                    <img src={cocktail.strDrinkThumb} alt=""/>            
                    <CocktailInfo>
                        <RecipeContainer>
                            <Title>{cocktail.strDrink}</Title>
                            <Heading>Ingredients</Heading>
                            <IngredientList cocktail = {cocktail} />
                            <Heading>Directions</Heading>
                            <p style= {{fontSize: '1.2em'}}>{cocktail.strInstructions}</p>
                        </RecipeContainer>

                        <ButtonContainer>
                            <button onClick = {() => setSlideNum('prev', list)}>Prev</button>
                            <CustomButton item = {cocktail} index = {index} title = {cocktail.isChecked ? ' Added!' : ' Add to favourites'} handleClick = {handleClick} />
                            <button onClick = {() => setSlideNum('next', list)}>Next</button>
                        </ButtonContainer>
                        <CardLogo src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Finger_heart.png" alt={cocktail.strDrink}/>

                    </CocktailInfo>
                    </>
                )
            ))}
        </SelectedContainer>
    )
}

export default SelectedCocktail;
