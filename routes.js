const express = require('express'),
      router = express.Router(),
      graphqlHTTP = require('express-graphql'),
      { buildSchema } = require('graphql'),
      request = require('request'),
      schema = require('./db/schema');

let token

const root = { hello: () => 'Hello world!' };

const options1 = {
  url: 'https://api.twitter.com/oauth2/token',
  method: 'post',
  headers: {
    "Authorization": `Basic ${process.env.TWITTER_SECRET}`,
    "Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: "grant_type=client_credentials"
};

const options2 = {
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=creightonsoukup&count=5',
  method: 'get',
  headers: {
    "Authorization": `Bearer ${token}`
  }
}

router.get('/twitter', (req, res, next) => {

 request(options1, (error, response) => {
    body = JSON.parse(response.body)
    token = body.access_token
    const options2 = {
      url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=creightonsoukup&count=5',
      method: 'get',
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }
    request.get(options2, (error, response) => {
      let tweets = JSON.parse(response.body)
      res.send(tweets)
    })
  })
})


router.post('/graphql', graphqlHTTP({
  schema: schema,
  root:root,
  graphiql: true
}));

router.get('/graphql', graphqlHTTP({
  schema: schema,
  root:root,
  graphiql: true
}));

module.exports = router
