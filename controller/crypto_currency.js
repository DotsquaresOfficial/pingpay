const express = require('express');
const CryptoCurrency = require('../models/crypto_currency_model'); // Make sure the path is correct
const { internalServerException } = require('../helpers/exceptions'); // Assuming you have a helper for handling exceptions

const getCryptocurrencyById = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the request parameters
        const cryptocurrency = await CryptoCurrency.findOne({ id });

        if (!cryptocurrency) {
            return res.status(404).json({ message: 'Cryptocurrency not found' });
        }

        res.status(200).json({ data: cryptocurrency });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

const getCryptocurrencies = async (req, res) => {
    try {
        const cryptocurrencies = await CryptoCurrency.find();

        res.status(200).json({ data: cryptocurrencies });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

const getCryptocurrenciesByNetworkId = async (req, res) => {
    try {
        const { id } = req.params; // Get the network ID from the request parameters
        const cryptocurrencies = await CryptoCurrency.find({ id });

        if (cryptocurrencies.length === 0) {
            return res.status(404).json({ message: 'No cryptocurrencies found for this network ID' });
        }

        res.status(200).json({ data: cryptocurrencies });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

// Export the API functions
module.exports = { 
    getCryptocurrencyById, 
    getCryptocurrencies, 
    getCryptocurrenciesByNetworkId 
};
