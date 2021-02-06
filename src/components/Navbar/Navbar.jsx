import React from 'react';
import {
    Nav,
    NavLink,  
    NavMenu,
    NavBrand
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                
                    <NavBrand>Courses</NavBrand>
                
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Popular
                    </NavLink>
                    <NavLink to="/favourite" >
                        Favourite
                    </NavLink>
                    <NavLink to="/new" >
                        New
                    </NavLink>
                </NavMenu>

            </Nav>
        </>
    );
};

export default Navbar;

