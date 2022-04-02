import React, { useState } from 'react';
import PlusIcon from '../../assets/icons/add.svg';
import MinusIcon from '../../assets/icons/minus.svg';
import CloseIcon from '../../assets/icons/remove.svg';
import ContactInfo from '../ContactInfo';
import { } from '../Navbar/style';
import {
    StyledCart,
    StyledHeader,
    StyledCount,
    StyledCartItemContent,
    StyledTop,
    StyledLeft,
    StyledBottom,
    StyledActions,
    StyledModl,
    StyledCartItem,
    StyledDivider,

    StyledTotalPrice,
    StyledCardActions,
    StyldeOutlineButton,
    StyldeButton,


} from './style';
export const Cart = ({ setOpen }) => {
    const [o, setO] = useState(false);
    return (
        <>
            {o && <ContactInfo setO={setO} />}
            <Modal>
                <StyledCart>
                    <StyledHeader onClick={() => setOpen(false)}>
                        <p>close</p>
                        <StyledCount>
                            3
                        </StyledCount>
                    </StyledHeader>
                    <h3>Order Summary</h3>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <StyledTotalPrice>
                        <p>TOTAL INCL.TAX</p>
                        <p>$45.235</p>
                    </StyledTotalPrice>
                    <StyledCardActions>
                        <StyldeOutlineButton >CONTINUE SHOPPING</StyldeOutlineButton>
                        <StyldeButton onClick={() => setO(true)}>PROCESS TO CHECKOUT</StyldeButton>
                    </StyledCardActions>
                </StyledCart>
            </Modal>
        </>

    );
};

const CartItem = () => {
    return (
        <StyledCartItem>
            <img src="asdf" />
            <StyledCartItemContent>
                <StyledTop>
                    <StyledLeft>
                        <h1>
                            This is the title
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida tortor quis libero luctus.</p>
                    </StyledLeft>
                    <CloseIcon />
                </StyledTop>
                <StyledBottom>
                    <p>$45.45</p>
                    <StyledActions>
                        <PlusIcon />
                        <p>2</p>
                        <MinusIcon />
                    </StyledActions>
                </StyledBottom>
            </StyledCartItemContent>
            <StyledDivider />
        </StyledCartItem>
    );
}

const Modal = ({ children }) => {
    return (
        <StyledModl>
            {children}
        </StyledModl>
    );
}