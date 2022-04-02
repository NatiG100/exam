const { default: styled } = require("@emotion/styled")

export const StyledFilterSort = styled.div`
    height:100% ;
    width:100% ;
    overflow-y: auto;
    background-color:#F9F9F9 ;
    padding: 1vw;
`;
export const StyledFilter = styled.div`
    margin-top:10px;
    display:grid ;
    grid-template-rows:max-content ;
    grid-gap:10px;
    margin-top:10px;
`;
export const StyledTitle = styled.div`
    border-bottom:1px solid #DEDEDE ;
    padding:5px ;
    padding-bottom:10px ;
`;
export const StyledSort = styled.div`
    display:grid ;
    grid-template-rows:max-content ;
    grid-gap:10px;
    margin-top:10px;
`;
export const StyledFilterItem = styled.div`
    display:grid ;
    grid-template-columns:max-content 1fr;
    justify-content:center ;
    align-items:center ;
    gap:8px;
`;

export const StyledSortItem = styled.div`
    display:grid ;
    grid-template-columns:max-content 1fr;
    justify-content:center ;
    align-items:center ;
    gap:8px;

`;