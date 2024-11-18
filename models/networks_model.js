const mongoose = require('mongoose');

// Define the schema for the network
const networkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensure that each network name is unique
        trim: true
    },
    chainId: {
        type: Number,
        required: true,
        unique: true, // Ensure that each chain ID is unique
    },
    nativeCurrency: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        symbol: {
            type: String,
            required: true,
            uppercase: true, // Automatically convert symbol to uppercase
            trim: true
        },
        decimals: {
            type: Number,
            required: true // The number of decimal places for the currency
        }
    },
    rpcUrl: {
        type: String,
        required: true, // The URL used to connect to the network
        trim: true
    },
    blockExplorerUrl: {
        type: String,
        required: true, // URL to the block explorer for viewing transactions
        trim: true
    },
    active: {
        type: Boolean,
        required: true, // URL to the block explorer for viewing transactions
    },
    iconUrl: {
        type: String,
        required: true, // URL to the network icon
        trim: true
    }
}, { timestamps: true,  id: true  }); // Automatically add createdAt and updatedAt fields

// Create the model from the schema
const Network = mongoose.model('Network', networkSchema);

module.exports = Network;
