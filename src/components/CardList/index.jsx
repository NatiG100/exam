import { useQuery } from '@apollo/client';
import React from 'react';
import PRODUCTS from '../../graphql/test';
import Card from '../Card';
import { StyledCardList } from './style';

const items = [

];
const CardList = () => {
    const { error, loading, data } = useQuery(PRODUCTS,
        {
            variables: {
                categoryId: "aeb50ed6-580d-a065-383a-e3932fbec6a1",
            }
        });
    if (error) return (<p>Error</p>)
    if (loading) return (<p>Loading</p>)
    return (
        <StyledCardList>
            {data?.products.map((item, index) => (
                <Card
                    discount={item.discount}
                    name={item.name}
                    price={item.price}
                    url={item.images[0]?.url}
                    key={index}
                />
            ))}

        </StyledCardList>
    );
}
export default CardList;