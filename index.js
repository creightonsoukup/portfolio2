"use strict";
require('dotenv').config()
const path = require("path"),
    express = require("express"),
    logger = require("morgan"),
    bodyParser = require("body-parser");


const DIST_DIR = path.join(__dirname, "dist"),
      PORT = process.env.PORT || 3000,
      app = express(),
      graphqlHTTP = require('express-graphql'),
      routes = require('./routes'),
      schema = require('./db/schema'),
      root = require('./db/root');

app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(DIST_DIR));

app.use("/api", routes);
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT);

module.exports = app;
