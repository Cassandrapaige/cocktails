import styled from 'styled-components'

export const CardContainer = styled.div`
background: #fff;
padding: 12px;
font-size: 2vw;
line-height: 3vw;
font-family: cantoni-pro, serif;
box-shadow: 0px 6px 6px rgba(16, 16, 16, .1);

&:hover {
    background: #fff7ff;
    z-index: 1000;
}
`

export const Title = styled.h2`
font-size: 5vw;
line-height: 5vw;
padding-bottom: 10px;
`

export const CardLogo = styled.img`
width: 40%;
position: absolute;
right: 0; 
bottom: 0;
`