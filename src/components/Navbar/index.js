import React from 'react';
import {
    StyledNavbar,
    StyledBrand,
    StyledNavigation,
    StyledNavigationItem,
    StyledCartContainer,
    StyledCart,
    StyledCartBadge,
    StyledNavigationIndicator

} from './style';
import Brand from "./../../assets/icons/logo.svg";
import Cart from "./../../assets/icons/bag.svg";
const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledBrand>
                <Brand />
            </StyledBrand>
            <StyledNavigation>
                <StyledNavigationItem>
                    Home
                </StyledNavigationItem>
                <StyledNavigationItem>
                    <p>Product</p>
                    <StyledNavigationIndicator />
                </StyledNavigationItem>
                <StyledNavigationItem>
                    Contact
                </StyledNavigationItem>
                <StyledNavigationItem>
                    about
                </StyledNavigationItem>
            </StyledNavigation>
            <StyledCartContainer>
                <StyledCart >
                    <Cart />
                </StyledCart>
                <StyledCartBadge>{3}</StyledCartBadge>
            </StyledCartContainer>
        </StyledNavbar>
    );
}
export default Navbar;