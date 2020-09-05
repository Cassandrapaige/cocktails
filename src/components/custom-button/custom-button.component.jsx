import React from 'react'

import {Button} from './custom-button.styles'

const CustomButton = ({title, type, handleClick, item, ...rest}) => {
    
    return (
        <Button 
            isChecked = {item.isChecked}
            data-type = {type} 
            onClick = {() => handleClick(item)} 
            {...rest}
        >
            <i class="fas fa-heart"></i>{title}
        </Button>
    )
}

export default CustomButton;
