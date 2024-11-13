const express = require('express');
const bodyParser = require('body-parser');
const { authRouter } = require('./router/auth_router');
const app = express();
const dotEnv = require('dotenv').config();
const morgan = require('morgan');

// Database connection
const connectDB = require('./helpers/init_mongodb.js');
connectDB();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Logs all request and response
app.use(morgan('combined'));

// parse application/json
app.use(bodyParser.json());

// Use your auth routes
app.use('/api/v1', authRouter);

// Handle 404 errors (undefined routes)
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(process.env.PORT || 5020, () => {
  console.log(`Server started at ${process.env.PORT || 5020}`);
});
