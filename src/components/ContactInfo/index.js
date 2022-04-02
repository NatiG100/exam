import React from 'react';
import { StyledButton } from '../Card/style';
import Brand from './../../assets/icons/logo.svg';
import {
    StyledContactInfo,
    StyledContactInfoBody,
    StyledNavigation,
    StyledIconButton,
    StyledFooter,
    StyledLink,

    StyldeContactInfoForm,
    StyledGroup,
    StyledInput,

    StyledOverview,
    StyledOverviewItem,
    StyledContent,
    StyledInfo


} from './style';
import BackIcon from './../../assets/icons/arrow.left.filled.svg';
import { StyledDivider } from '../Navbar/style';

const ContactInfo = ({ setO }) => {
    return (
        <StyledContactInfo>
            <Brand />
            <StyledContactInfoBody>
                <ContactInfoForm />
                <Overview />
            </StyledContactInfoBody>
            <StyledNavigation>
                <StyledIconButton onClick={() => setO(false)}>
                    <BackIcon />
                    <p>RETURN TO CART</p>
                </StyledIconButton>
                <StyledButton>
                    CompleteOrder
                </StyledButton>
            </StyledNavigation>
            <StyledFooter>
                <StyledLink>Refund Policy</StyledLink>
                <StyledLink>Privacy Policy</StyledLink>
                <StyledLink>Terms of Service</StyledLink>
            </StyledFooter>
        </StyledContactInfo>
    );
}

export default ContactInfo;

const ContactInfoForm = () => {
    return (
        <StyldeContactInfoForm>
            <p>Contact information</p>
            <Input placeHolder={"Email or Phone number"}></Input>
            <p>Shipping Address</p>
            <StyledGroup>
                <Input placeHolder={"First Name"}></Input>
                <Input placeHolder={"Last Name"}></Input>
            </StyledGroup>
            <Input placeHolder={"Email or Phone number"}></Input>
            <Input placeHolder={"Email or Phone number"}></Input>
            <Input placeHolder={"Email or Phone number"}></Input>
            <StyledGroup>
                <Input placeHolder={"First Name"}></Input>
                <Input placeHolder={"Last Name"}></Input>
            </StyledGroup>
        </StyldeContactInfoForm>
    );
}
const Input = ({ placeHolder }) => {
    return (
        <StyledInput placeholder={placeHolder}>

        </StyledInput>
    );
}

const Overview = () => {
    return (
        <StyledOverview>
            <OverviewItem />
            <OverviewItem />
            <StyledInfo>
                <p>SUBTOTAL</p>
                <h4>$49</h4>
            </StyledInfo>
            <StyledInfo>
                <p>SHIPPING</p>
                <h4>$49</h4>
            </StyledInfo>
            <StyledDivider />
            <StyledInfo>
                <p>TOTAL</p>
                <h4>$49</h4>
            </StyledInfo>

        </StyledOverview>
    );
}
const OverviewItem = () => {
    return (
        <StyledOverviewItem>
            <img src="asdf"></img>
            <StyledContent>
                <h3>title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida tortor quis libero luctus.</p>
            </StyledContent>
            <p>$49.40</p>
            <StyledDivider />
        </StyledOverviewItem>
    );
}