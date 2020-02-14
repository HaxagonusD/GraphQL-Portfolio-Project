const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require("./schema/schema")
const mongoose = require('mongoose');

const app = express();


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const port = 4000;
app.listen(port, ()=>{
    console.log('Listening for requests on port: ' + port );
})

console.log("Connecting to the database");
const mongooseDataBaseURI = "mongodb+srv://Hax:1234qwe@cluster0-bjsvk.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongooseDataBaseURI, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
    if(err) return console.error(err);
    console.log("MongoDB conenction established")
})