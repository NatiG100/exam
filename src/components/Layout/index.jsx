import React from 'react';
import Navbar from '../Navbar';
import { StyledLyout } from './style';

const Layout = ({ children }) => {
    return (
        <StyledLyout>
            <Navbar />
            {children}
        </StyledLyout>
    );
}
export default Layout;