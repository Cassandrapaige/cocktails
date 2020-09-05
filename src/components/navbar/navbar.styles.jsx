import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavbarContainer = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 12px 50px;
background: #fff7ff;
boxShadow: 0px 6px 6px rgba(16, 16, 16, .1);
position: sticky;
top: 0;
z-index: 5000;
`
export const Logo = styled(NavLink)`
font-family: cantoni-pro, serif;
font-size: 2.5em;
`

export const Counter = styled(NavLink)`
font-family: cantoni-pro, serif;
font-size: 2em;
`
