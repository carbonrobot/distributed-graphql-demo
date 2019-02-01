const { gql } = require('apollo-server');

const mergeSchema = `
 extend type Rental {
    book: Book
  }
`;

const resolvers = {
  Rental: {
    book: {
      fragment: '... on Rental { bookId }',
      resolve(rental, args, context, info) {
        console.log(rental, args);
        return info.mergeInfo.delegateToSchema({
          schema: context.bookSchema,
          operation: 'query',
          fieldName: 'book',
          args: {
            id: rental.bookId,
          },
          context,
          info,
        });
      },
    },
  },
};

module.exports = { mergeSchema, resolvers };
