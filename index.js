const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema')
const port = process.env.PORT || 6000;
const path = require('path');

const root = { hello : () => 'Hello World'}

const app = express()

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(port);
console.log('App listening on port:', port)
