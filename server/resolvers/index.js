const products = require("../data");

module.exports = {
    Query: {
        products: () => products,
    },
};