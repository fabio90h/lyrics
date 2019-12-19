const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
const cors = require('cors')

//Import Path library to make file path easier
const path = require('path')

const keys = require('./config/keys')


const app = express();

const MONGO_URI = keys.mongoURI;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(cors())
app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

//Set a static folder. This will create a new middleware 
//function to serve files from within a given root
app.use(express.static('public'))

//All path except for "/graphql" will be redirect to the public folder
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

//Make PORT dynamic to either local or production
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log('Listening');
});
