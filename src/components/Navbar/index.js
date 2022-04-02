import React, { useState } from 'react';
import {
    StyledNavbar,
    StyledBrand,
    StyledNavigation,
    StyledNavigationItem,
    StyledCartContainer,
    StyledCart,
    StyledCartBadge,
    StyledNavigationIndicator,
    StyledDivider

} from './style';
import Brand from "./../../assets/icons/logo.svg";
import CartIcon from "./../../assets/icons/bag.svg";
import { Cart } from '../Cart';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (<>
        {open && <Cart setOpen={setOpen} />}
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
            <StyledCartContainer onClick={() => setOpen(true)}>
                <StyledCart >
                    <CartIcon />
                </StyledCart>
                <StyledCartBadge>{3}</StyledCartBadge>
            </StyledCartContainer>

        </StyledNavbar>
        <StyledDivider />
    </>
    );
}
export default Navbar;