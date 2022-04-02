import styled from "@emotion/styled"

export const StyledCart = styled.div`
    height:100% ;
    padding: 4vw;
    background-color:white ;
    display:grid ;
    overflow-y:auto ;
    width:60%;
    h3{
        margin-top:15px;
        margin-bottom:15px;
    }
`;
export const StyledHeader = styled.div`
    justify-self:right ;
    display: flex;
    justify-content:center ;
    align-items:center ;
    gap:15px;
    padding:15px ;
    padding-top:8px;
    padding-bottom:8px;
    border-radius:40px; 
    border:1px solid #dedede;
    cursor: pointer;
`;
export const StyledCount = styled.div`
    display: flex;
    justify-content:center ;
    justify-items:center ;
    background-image:linear-gradient(-45deg,#00CBFF,#D629FF) ;
    height: 22px;
    width: 22px;
    border-radius:20px ;
    z-index:2 ;
    color:white;
`;
export const StyledCartItem = styled.div`
    display: grid;
    grid-template-columns:150px 1fr ;
    gap:10px;
`;
export const StyledCartItemContent = styled.div`
    padding:5px;
    display:grid ;
    grid-template-rows:1fr 1fr ;
    gap:20px;
    border-bottom: 1px solid #dedede;
`;
export const StyledTop = styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center;
    h1{
        font-size:16px ;
    }
`;
export const StyledLeft = styled.div`
    width: 80%;
`;
export const StyledBottom = styled.div`
    display:grid ;
    grid-template-columns:1fr 1fr ;
`;
export const StyledActions = styled.div`
    justify-self:right ;
    display:grid ;
    width: 40%;
    grid-template-columns:1fr 1fr 1fr ;
    p{
        text-align:center ;
    }
`;

export const StyledModl = styled.div`
    position:fixed ;
    top:0px;
    left:0px ;
    height:100vh ;
    width:100vw ;
    background-color:#2228 ;
    display:flex ;
    justify-content:flex-end ;
    z-index:1000 ;
`;
export const StyledDivider = styled.div`
    
    width:100% ;
`;

export const StyledTotalPrice = styled.div`
    width:100% ;
    padding-top:10px ;
    padding-bottom:10px ;
    display: flex;
    justify-content:space-between ;
    align-items:center ;
    border-top:1px solid #dedede;
    border-bottom:1px solid #dedede;
    margin-top: 100px;
`;
export const StyledCardActions = styled.div`
    display:flex ;
    justify-content:flex-end ;
    gap:15px;
    padding-top: 15px;
    padding-bottom: 15px;
`;
export const StyldeOutlineButton = styled.button`
    cursor:pointer ;
    font-size:14px ;
    border: 1px solid black;
    border-radius:40px ;
    padding:8px;
    padding-left:15px;
    padding-right:15px;
    background-color:white ;
`;
export const StyldeButton = styled.button`
cursor:pointer ;
border:none;
    font-size:14px ;
    background-color: black;
    color:white;
    border-radius:40px ;
    padding:8px;
    padding-left:15px;
    padding-right:15px;
`;