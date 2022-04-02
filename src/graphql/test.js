import { gql } from "@apollo/client";

const APARTMENT_REPORT = gql`
    query {
        apartmentReport{
            sold
            available
            bookedUp
            total
        }
    }
`;

export default APARTMENT_REPORT;