import React from 'react'

import {NavbarContainer, Logo, Counter} from './navbar.styles'

const Navbar = ({count = 0}) => {
    return (
        <NavbarContainer>
            <Logo to = '/'>Everything Cocktails</Logo>
            <Counter to = '/favourites'>Favourites ({count})</Counter>
        </NavbarContainer>
    )
}

export default Navbar;