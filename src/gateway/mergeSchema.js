const { gql } = require('apollo-server');

const rentals = [
  {
    userId: 1,
    bookId: 2
  },
  {
    userId: 2,
    bookId: 1,
  },
];

const mergeSchema = gql`
  type Rental {
    userId: Int!
    bookId: Int!
  }
  type Query {
    rentals: [Rental]
  }
`;

const resolvers = {
  Query: {
    rentals: () => rentals,
  },
};

module.exports = { mergeSchema, resolvers };
