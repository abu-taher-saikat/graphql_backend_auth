const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema')


// Load env vars 
dotenv.config();

//Connect to database
// connectDB(); 


const app = express();
// Body Parser
app.use(express.json());

app.use('/graphql', graphqlHTTP({
    schema ,
    graphiql : true
}))


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(PORT);
    console.log(`App listening on port ${process.env.NODE_ENV} and port on ${PORT}`);
});
