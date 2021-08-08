import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query Products{
  products {
    id
    name
    image
    price
    url
    deliveryType
  }
}      
`