// Add dependencies
const express = require('express');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import schema
const schema = require('./schema/schema');

// Initialize the app
const app = express();

// cors 
app.use(cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), expressGraphQL({
    schema: schema,
    graphiql: true
}));

// port variable
const port = process.env.PORT || 5000;

// start the server
app.listen(port, () => {
    console.log(`go to http://localhost:${port}/graphiql to run queries!`)
})