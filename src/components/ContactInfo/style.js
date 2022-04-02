const { default: styled } = require("@emotion/styled")

export const StyledContactInfo = styled.div`
    position:fixed ;
    top:0px;
    left:0px;
    height:100% ;
    width:100% ;
    background-color: #F9F9F9;
    z-index:10000 ;
    svg{
        height:25px ;
    }
    padding:25px;
    padding-left:60px ;
    padding-right:60px ;
    display:grid ;
    justify-content: space-between;
    grid-template-columns:1fr ;
`;
export const StyledContactInfoBody = styled.div`
width:100% ;
display:grid ;
grid-template-columns:2fr 4fr ;
gap:5vw;
margin-bottom:40px;
`;
export const StyledNavigation = styled.div`
    display:grid ;
    grid-template-columns:1fr 1fr;
    height:max-content ;
    gap:px;
    align-items:center ;
    justify-content:space-between ;
    width:400px ;
`;
export const StyledIconButton = styled.div`
display:flex ;
gap:15px;
justify-content:center ;
align-items: center;
color:#bebebe;
svg{
    height:14px ;
        *{
            stroke:#bebebe;
        }
    }
`;
export const StyledFooter = styled.div`
    border-top:1px solid #dedede ;
    padding-top: 25px;
    width:100% ;
    padding-bottom: 25px;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    gap:15px;
    height:max-content ;
`;
export const StyledLink = styled.div`

`;

export const StyldeContactInfoForm = styled.div`
 width:100%;
    background-color:white ;
    border-radius:10px ;
    padding:25px;

    height:max-contents ;
    display:grid ;
    gap:5px;
    p{
        margin-top:10px ;
    }
`;
export const StyledGroup = styled.div`
display:grid ;
grid-template-columns:1fr 1fr ;
grid-gap:5px ;
`;
export const StyledInput = styled.input`
border:1px solid #ededed;
border-radius:5px ;
padding:10px;
`;

export const StyledOverview = styled.div`
    background-color:white ;
    border-radius:15px ;
    padding:25px;
    img{
        height:100px ;
        width:100px ;
    }
`;
export const StyledOverviewItem = styled.div`
    display: grid;
    grid-template-columns:max-content 1fr max-content ;
    justify-content:center ;
    align-items:center ;
    grid-gap:30px;
`;
export const StyledContent = styled.div`
    align-self:flex-start ;
    width:80%;
`;
export const StyledInfo = styled.div`
    width: 100%;
    display:flex ;
    justify-content:space-between ;
    padding-top:5px;
    padding-bottom:5px;
`;