const express = require( 'express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectdb = require('./config/DB')
const morgan = require('morgan')

dotenv.config({path: './config/config.env'})

connectdb()

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  });
//   Access-Control-Allow-Origin: *
// Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE

app.get('/',  (req,res) => res.send("Hello From Express"))

const Transactions = require('./routes/transaction.js')
app.use('/api/v1/transactions', Transactions)

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }


const port = process.env.PORT || 5000
app.listen(port, console.log(`Server running on ${ process.env.NODE_ENV} on port ${port}`.yellow.bold))

