import styled from "@emotion/styled";
export const StyledCard = styled.div`
    height:max-content ;
    display:grid ;
    grid-gap:5px;
`;
export const StyledImgContainer = styled.div`
    height:200px ;
    border-radius:5px ;
    position:relative ;
    overflow:hidden ;
    img{
        object-fit:cover ;
        height:100% ;
        width:100% ;
    }
`;
export const StyledTag = styled.div`
    position:absolute ;
    top:10px;
    right:20px;
    
`;
export const StyledTextSection = styled.div`
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    height:40px ;
    text-overflow: ellipsis ;
    p{
        max-width:150px ;
    }
`;
export const StyledButton = styled.button`
    width:100% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    padding-top:8px ;
    padding-bottom:8px ;
    color:white;
    background-color:black ;
    border-radius:40px ;
    border:none ;
`;

export const StyledTagItem = styled.div`
    position:relative ;
    height: 40px;
    width:40px ;
    p{
        position: relative;
        top:-95%;
        left:40%;
        font-size:12px ;
        color:white;
    }
    svg{
        position: relative;
        top:0%;
        left:0%;
    }
`;