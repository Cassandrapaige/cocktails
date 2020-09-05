import React from 'react'

import {Button} from './custom-button.styles'

const CustomButton = ({title, type, handleClick, item, index,...rest}) => {
    
    return (
        <Button 
            isChecked = {item.isChecked}
            onClick = {(e) => handleClick(e, item, index)} 
            {...rest}
        >
            <i class="fas fa-heart"></i>{title}
        </Button>
    )
}

export default CustomButton;
