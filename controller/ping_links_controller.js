const { fieldDoesNotExistsError, fieldIsInvalidError, feildAlreadyExistsError, userDoesNotExistsError } = require("../helpers/errors");
const { internalServerException } = require("../helpers/exceptions");
const { signAccessToken } = require("../helpers/jwt_helper");
const { validateEmail, validatePassword, validateWalletAddress } = require("../helpers/regex");
const { pingLinkSchemaValidator } = require("../helpers/validators");
const pingLink = require("../models/ping_links_model");
const User = require("../models/users_model");

// Create Ping Link
const createPingLink = async (req, res) => {
    try {
        // Validate the request body using joi
        const { error } = pingLinkSchemaValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ message: 'Validation error', details: error.details });
        }

        // Check if user exists
        const doesExist = await User.findOne({ _id: req.payload.userId });
        if (!doesExist) {
            return userDoesNotExistsError;
        }

        // Extract validated details from the request body
        const {
            name,
            description,
            includedContent,
            contentType,
            text,
            paymentType,
            priceType,
            priceAmount,
            priceCurrency,
            network,
            receiveAmount,
            receiveCurrency,
            receiveType,
            receiverWallet,
            receiverWalletNetwork
        } = req.body;

        // Create and save a new pingLink document
        const newPingLink = new pingLink({
            userId:req.payload.userId,
            name,
            description,
            includedContent,
            contentType,
            text,
            paymentType,
            priceType,
            priceAmount,
            priceCurrency,
            network,
            receiveAmount,
            receiveCurrency,
            receiveType,
            receiverWallet,
            receiverWalletNetwork
        });

        const savedPingLink = await newPingLink.save();

        res.status(201).json({
            message: 'Ping link created successfully',
            data: { pingLinkId: savedPingLink.id }
        });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

// Get Ping Links by User ID
const getPingLink = async (req, res) => {
    try {
        const userId = req.payload.userId;
        const pingLinks = await pingLink.find({ userId });
        if (!pingLinks.length) {
            res.status(200).json({ data: [] });
        }
        res.status(200).json({ data: pingLinks });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

// Get Ping Link by ID
const getPingLinkById = async (req, res) => {
    try {
        const { id } = req.params;
        const pingLinkData = await pingLink.findById(id);
        if (!pingLinkData) {
            res.status(200).json({ data: pingLinks });
        }
        res.status(200).json({ data: pingLinkData });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

// Update Ping Link
const updatePinglink = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the request body using joi
        const { error } = pingLinkSchemaValidator.validate(req.body);
        if (error) {
            return res.status(400).json({ message: 'Validation error', details: error.details });
        }

        const updatedPingLink = await pingLink.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPingLink) {
            return res.status(400).json({ success:false,message: 'Link not found', reason:'please check your id' });
        }

        res.status(200).json({
            message: 'Ping link updated successfully',
            data: updatedPingLink
        });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};

module.exports = { createPingLink, getPingLink, getPingLinkById, updatePinglink };
