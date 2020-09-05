import styled from 'styled-components'

export const SelectedContainer = styled.div`
max-width: 1100px;
margin: 50px auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
padding: 20px;
background: #fff;
box-shadow: 0px 6px 6px rgba(16, 16, 16, .1);
position: relative;
overflow: hidden;
`

export const Title = styled.h2`
font-size: 5vw;
line-height: 6vw;
font-family: cantoni-pro, serif;
`

export const Heading = styled.h4`
margin: 15px 0 5px 0;
`

export const RecipeContainer = styled.div`
`

export const CocktailInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
z-index: 2000;

button {
    border: none;
    outline: none;
    font-family: cantoni-pro, serif;
    font-size: 40px;
    background: none;
}
`

export const CardLogo = styled.img`
width: 40%;
position: absolute;
right: 0; 
bottom: 0;
opacity: .1;
`