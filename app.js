require('dotenv').config()
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})
mongoose.connection.once('open', () => console.log('\nMongo Online\n'))

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
)

app.listen(4000, () => console.log(`\nServer Listens and Obeys\n`))
