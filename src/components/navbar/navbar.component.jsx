import React from 'react'

import {NavbarContainer, Logo, Counter} from './navbar.styles'

const Navbar = ({count = 0}) => {
    return (
        <NavbarContainer>
            <Logo>Everything Cocktails</Logo>
            <Counter>Favourites ({count})</Counter>
        </NavbarContainer>
    )
}

export default Navbar;