const { buildSchema } = require('graphql')
const schema = buildSchema(`
  type Query {
    allContent: String
  }
`);

module.exports = schema
