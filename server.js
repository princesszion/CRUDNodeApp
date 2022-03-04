const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config({path: 'config.env'})
const PORT = process.env.PORT||8080;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const connectDB = require('./server/database/connection');

//log request
app.use(morgan('tiny'));
//connect DB
connectDB();

//parse request parameters
app.use(bodyParser.urlencoded({ extended: true }))

//set view
app.set('view engine', 'ejs')

//load assets
app.use(express.static(__dirname + '/assets'));

//load routes

app.use('/',require('./server/routes/router'))


app.listen(PORT,()=>{console.log('Server is running on http://localhost:8080');});