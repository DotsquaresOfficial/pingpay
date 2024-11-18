const mongoose = require('mongoose');

// Define the schema for the cryptocurrency
const cryptoCurrencySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure that each cryptocurrency name is unique
        trim: true
    },
    symbol: {
        type: String,
        required: true,
        unique: true, // Ensure that each symbol is unique
        uppercase: true, // Automatically convert symbol to uppercase
        trim: true
    },
    networkId: {
        type: String,
        required: true,
        trim: true // Remove extra whitespace
    },
    imageUrl: {
        type: String,
        required: true, // URL to the image representing the cryptocurrency
        trim: true
    },
    active: {
        type: Boolean,
        required: true, // URL to the block explorer for viewing transactions
    }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the model from the schema
const CryptoCurrency = mongoose.model('CryptoCurrency', cryptoCurrencySchema);

module.exports = CryptoCurrency;
