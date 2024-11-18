const express = require('express');
const bodyParser = require('body-parser');
const { authRouter } = require('./router/auth_router');
const { pingLinkRouter } = require('./router/ping_links_router.js');
const { uploadFileRouter } = require('./router/file_uploader_router.js');

const app = express();
const dotEnv = require('dotenv').config();
const morgan = require('morgan');
const cors=require('cors');


app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

// Database connection
const connectDB = require('./helpers/init_mongodb.js');
const { networkRouter } = require('./router/network_router.js');
const cryptoRouter = require('./router/crypto_router.js');
connectDB();

// using cors to access from anywhere
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Logs all request and response
app.use(morgan('combined'));


// parse application/json
app.use(bodyParser.json());

// Use your auth routes
app.use('/api/v1', authRouter);
app.use('/api/v1',pingLinkRouter);
app.use('/api/v1',uploadFileRouter);
app.use('/api/v1',networkRouter);
app.use('/api/v1',cryptoRouter);

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
