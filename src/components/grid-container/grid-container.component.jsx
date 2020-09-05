import React from 'react'

import {ListContainer} from './grid-container.styles'

const GridContainer = ({children}) => {
    return (
        <ListContainer>
            {children}
        </ListContainer>
    )
}

export default GridContainer;
