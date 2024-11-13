const express = require('express');
const bodyParser = require('body-parser');
const { authRouter } = require('./router/auth_router');
const app = express();
const dotEnv = require('dotenv').config();

// Database connection
const connectDB = require('./helpers/init_mongodb.js');
const morgan = require('morgan');
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//Logs all request and response
app.use(morgan('combined'));

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', authRouter)

app.listen(process.env.PORT||3001, () => {
    console.log("server started");
});