const { getCryptocurrencyById, getCryptocurrencies, getCryptocurrenciesByNetworkId } = require('../controller/crypto_currency');
const { verifyAccessToken } = require('../helpers/jwt_helper');
const express = require('express');

const cryptoRouter = express.Router();

// Route to get a cryptocurrency by ID
cryptoRouter.get('/getCryptocurrencyById/:id', verifyAccessToken,getCryptocurrencyById);

// Route to get all cryptocurrencies
cryptoRouter.get('/getCryptocurrencies',verifyAccessToken, getCryptocurrencies);

// Route to get cryptocurrencies by network ID
cryptoRouter.get('/getCryptocurrenciesByNetworkId/:id',verifyAccessToken,getCryptocurrenciesByNetworkId);

module.exports = cryptoRouter;
