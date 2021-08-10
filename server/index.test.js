const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require("./types");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

test('Type check', async () => {
    const result = await server.executeOperation({
        query: gql`
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
    });

    expect(typeof result.data.products[0].id).toBe('number');
    expect(typeof result.data.products[0].name).toBe('string');
    expect(typeof result.data.products[0].image).toBe('string');
    expect(typeof result.data.products[0].price).toBe('number');
    expect(typeof result.data.products[0].url).toBe('string');
    expect(typeof result.data.products[0].deliveryType).toBe('number');
});

test('Data check', async () => {
    const mock = {
        id: 0,
        name: "Vestel 58U9500 UHD Smart TV",
        image: "/assets/images/product-1.jpg",
        price: 12.50,
        url: "https://www.google.com/",
        deliveryType: 0
    }

    const result = await server.executeOperation({
        query: gql`
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
    });

    expect(result.data.products[0]).toEqual(mock);
});
