const { gql } = require('apollo-server');
const { makeExecutableSchema } = require('graphql-tools');

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

const locations = [
  {
    id: 1,
    name: 'Chicago, IL'
  },
  {
    id: 1,
    name: 'Baltimore, MD'
  }
];

const typeDefs = gql`
  type Location {
    id: Int!
    name: String!
  }
  type Rental {
    userId: Int!
    bookId: Int!
  }
  type Query {
    locations: [Location]
    rentals: [Rental]
  }
`;

const resolvers = {
  Query: {
    locations: () => locations,
    rentals: () => rentals,
  },
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers,
});