import styled from "@emotion/styled";
export const StyledNavbar = styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    width:100% ;
    padding:20px;
    padding-left:70px ;
    padding-right:70px ;
`;
export const StyledBrand = styled.div`
font-size:24px;
font-weight:bold ;
font-family:inter ;
svg{
    height:33px ;
    font-weight:regular ;
}
`;
export const StyledNavigation = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    gap:40px;
`;
export const StyledNavigationItem = styled.div`
    color:black;
    font-size:16px ;
    p{
        margin: 10px;
    }
`;
export const StyledCartContainer = styled.div`
    position: relative;
`;
export const StyledCart = styled.div`
    border:1px solid #DEDEDE;
    height:40px;
    width:40px ;
    position:absolute ;
    top:0px;
    right:0px;
    display:flex ;
    justify-content:center ;
    align-items:center ;
    border-radius:40px ;
    svg{
        *{
            stroke:black;
        }
    }
`;
export const StyledCartBadge = styled.div`
    display: flex;
    justify-content:center ;
    justify-items:center ;
    background-image:linear-gradient(-45deg,#00CBFF,#D629FF) ;
    height: 22px;
    width: 22px;
    border-radius:20px ;
    z-index:2 ;
    position:relative ;
    right:-5px ;
    top:-5px ;
    color:white;
    

`;

export const StyledNavigationIndicator = styled.div`
    height:3px ;
    width:21px ;
    background-color:black ;
    margin-left:auto ;
    margin-right:auto ;
    border-radius:20px ;
`;