import { gql } from "@apollo/client";

const PRODUCTS = gql`
    query products($categoryId:String!){
    products (categoryId:$categoryId){
        name
        productId
        price
        discount
        images{
        url
        }
    }
    }
`;

export default PRODUCTS;