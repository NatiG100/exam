import React from 'react';
import {
    StyledCard,
    StyledImgContainer,
    StyledTag,
    StyledTextSection,
    StyledButton,
    StyledTagItem
} from "./style";
import TagIcon from './../../assets/icons/discount.svg';
const Card = ({ url, discount, name, price }) => {
    return (
        <StyledCard>
            <StyledImgContainer>
                <img src={url} />
                <StyledTag>
                    <StyledTagItem>
                        <TagIcon />
                        <p>{discount}%</p>
                    </StyledTagItem>
                </StyledTag>
            </StyledImgContainer>
            <StyledTextSection>
                <p>{name}</p>
                <p>${price}</p>
            </StyledTextSection>
            <StyledButton>
                Add to Cart
            </StyledButton>
        </StyledCard>
    );
}
export default Card;

