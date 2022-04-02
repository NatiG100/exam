import React from 'react';
import FilterSort from '../Filter';
import Navbar from '../Navbar';
import {
    StyledLyout,
    StyledWrapper, StyledContent
} from './style';

const Layout = ({ children }) => {
    return (
        <StyledLyout>
            <Navbar />
            <StyledWrapper>
                <FilterSort />
                <StyledContent>
                    {children}
                </StyledContent>
            </StyledWrapper>
        </StyledLyout>
    );
}
export default Layout;