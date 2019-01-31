const { HttpLink } = require('apollo-link-http');
const { 
  introspectSchema,
  makeRemoteExecutableSchema,
} = require('graphql-tools');
const fetch = require('node-fetch');

async function remoteSchema(uri) {
  const link = new HttpLink({ uri, fetch });
  const schema = await introspectSchema(link);

  return makeRemoteExecutableSchema({
    schema,
    link,
  });
}

module.exports = { remoteSchema };