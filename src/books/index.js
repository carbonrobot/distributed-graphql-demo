const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  type Book {
    id: Int!
    title: String
    author: String
  }
  type Query {
    books: [Book]
    book(id: Int!): Book
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: id => books.find(x => x.id === id),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({
  port: 6001
}).then(({ url }) => {
  console.log(`🚀  Book service ready at ${url}`);
});