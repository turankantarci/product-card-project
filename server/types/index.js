const { gql } = require('apollo-server');

module.exports = gql`
type Product {
  id: Int
  name: String
  image: String
  price: Float
  url: String
  deliveryType: Int
}

type Query {
  products: [Product]
}
`;
