import styled from 'styled-components'

export const Button = styled.button`
background: #fff;
border: ${props => props.isChecked ? '1px solid #ff0100' : '1px solid #000'};
padding: 12px;
outline: none;
margin-top: 20px;

.fa-heart {
    color: #ff0100;
}
`