const { ApolloServer } = require('apollo-server');
const { mergeSchemas } = require('graphql-tools');

const localSchema = require('./localSchema');
const { mergeSchema, mergeResolvers } = require('./mergeSchema');
const { remoteSchema } = require('./remoteSchema');

async function createServer() {
  const remoteSchemas = [
    remoteSchema('http://localhost:6001'),
    remoteSchema('http://localhost:6002')
  ]
  const [bookSchema, userSchema] = await Promise.all(remoteSchemas);

  const schema = mergeSchemas({
    schemas: [bookSchema, userSchema, localSchema, mergeSchema],
    resolvers: mergeResolvers,
  });

  return new ApolloServer({ schema });
}

module.exports = { createServer };