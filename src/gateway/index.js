const { createServer } = require('./server');

createServer().then(server => {

  server.listen({
    port: 6003
  }).then(({ url }) => {
    console.log(`🚀  Gateway server ready at ${url}`);
  });

});
