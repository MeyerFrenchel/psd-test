import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
margin-top: 60px;
height: 80px;
display:flex;
justify-content: space-around;
padding: 0.5rem calc((100vh - 1000px) / 2);
z-index: 10;

@media only screen and (max-width:768px) {
    display: block;
    margin-top: 5%;
}
`
export const NavLink = styled(Link)`
color: #CBB1A2;
display: flex;
align-items:center;
text-decoration: none;
padding: 0 1rem;
height: 80%;
cursor: pointer;
font-size: 24px;
font-weight: bold;

&.active {
    color: #6749A5;  
    font-weight: bold;
    font-size: 24px;
    position: relative;
}
&.active::after {
    content:"";
    position: absolute;
    width:20%;
    height:0.1rem;
    background: #6749A5;
    left: 40%;
    bottom: 0;
}
@media only screen and (max-width:768px) {
    display: inline-flex;
    flex-wrap: wrap;
    margin-left: 20px;
    position: relative;
    top: 10%;
}

`
export const NavMenu = styled.div`
display: flex;
align-items: center;
@media only screen and (max-width:768px) {
margin-left: 60px;
}
`

export const NavBrand = styled.h1`
display: flex;
align-items: center;
font-size: 48px;
color: #000000;
margin-right: 17%;
z-index: 3;

@media only screen and (max-width:768px) {
    margin-right: 1%;
    margin-left:20%;
}
`


