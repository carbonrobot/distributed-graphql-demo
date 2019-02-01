const { ApolloServer, gql } = require('apollo-server');

const users = [
  {
    id: 1,
    name: 'Bob Marley',
  },
  {
    id: 2,
    name: 'Rebecca Hanson',
  },
];

const typeDefs = gql`
  type User {
    id: Int!
    name: String!
  }
  type Query {
    users: [User]
    user(id: Int!): User
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: id => users.find(x => x.id === id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({
  port: 6002
}).then(({ url }) => {
  console.log(`🚀  User service ready at ${url}`);
});