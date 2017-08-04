const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema')

const root = { hello : () => 'Hello World'}

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000);
