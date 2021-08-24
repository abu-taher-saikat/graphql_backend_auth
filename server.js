const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema')


// Load env vars 
dotenv.config();

//Connect to database
// connectDB(); 
const {createJwtToken} = require('./utill/auth')
const {authenticate} = require('./middleware/auth')

const app = express();
// Body Parser
app.use(express.json());

app.use(authenticate)

app.use('/graphql', graphqlHTTP({
    schema ,
    graphiql : true
}))


app.get('/authtest',(req,res)=>{
    res.json(createJwtToken({username : "saikat", email : "jdoe@gmail.com", displayName : "saikat abu taher"}))
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(PORT);
    console.log(`App listening on port ${process.env.NODE_ENV} and port on ${PORT}`);
});
