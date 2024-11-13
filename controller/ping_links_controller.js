const { fieldDoesNotExistsError, fieldIsInvalidError, feildAlreadyExistsError, userDoesNotExistsError } = require("../helpers/errors");
const { internalServerException } = require("../helpers/exceptions");
const { signAccessToken } = require("../helpers/jwt_helper");
const { validateEmail, validatePassword, validateWalletAddress } = require("../helpers/regex");
const User = require("../models/users_model");

const createPingLink = async (req, res) => {
    try {
        const {userId}=req.payload;
        console.log(req.payload);
        const doesExist = await User.findOne({ _id: userId });
        if(!doesExist){
           return userDoesNotExistsError;
        }
        return res.status(200).send({
            success: true,
            message: "Details fetched successfully.",
            data: {
                userId: doesExist.id,
                walletAddress:doesExist.walletAddress,
                email:doesExist.walletAddress
            }
        });
    } catch (exception) {
        return internalServerException(res, exception);
    }
}

const getPingLink = async (req, res) => {
    try {
        const { email, walletAddress } = req.body;

        if (email && !validateEmail(email)) {
            return fieldIsInvalidError(res, "email");
        }
        if (!walletAddress) {
            return fieldDoesNotExistsError(res, "walletAddress");
        }else if(!validateWalletAddress(walletAddress)){
            return fieldIsInvalidError(res, "walletAddress");
        }

        const doesExist = await User.findOne({ email: email });
        let userId;
        if (!doesExist) {
            const user = new User({ email: `${email}`, walletAddress: walletAddress });
            const savedUser = await user.save(); 
            userId=savedUser.id;
        }else{
           userId=doesExist.id;
        }

        const accessToken=await signAccessToken(userId);

        return res.status(200).send({
            success: true,
            message: "Access Key genrated successfully.",
            accessToken
        });

    } catch (exception) {
        return internalServerException(res, exception);
    }
}

const getPingLinkById = async (req, res) => {
    try {
        const { email, walletAddress } = req.body;

        if (email && !validateEmail(email)) {
            return fieldIsInvalidError(res, "email");
        }
        if (!walletAddress) {
            return fieldDoesNotExistsError(res, "walletAddress");
        }else if(!validateWalletAddress(walletAddress)){
            return fieldIsInvalidError(res, "walletAddress");
        }

        const doesExist = await User.findOne({ email: email });
        let userId;
        if (!doesExist) {
            const user = new User({ email: `${email}`, walletAddress: walletAddress });
            const savedUser = await user.save(); 
            userId=savedUser.id;
        }else{
           userId=doesExist.id;
        }

        const accessToken=await signAccessToken(userId);

        return res.status(200).send({
            success: true,
            message: "Access Key genrated successfully.",
            accessToken
        });

    } catch (exception) {
        return internalServerException(res, exception);
    }
}

const updatePinglink = async (req, res) => {
    try {
        const { email, walletAddress } = req.body;

        if (email && !validateEmail(email)) {
            return fieldIsInvalidError(res, "email");
        }
        if (!walletAddress) {
            return fieldDoesNotExistsError(res, "walletAddress");
        }else if(!validateWalletAddress(walletAddress)){
            return fieldIsInvalidError(res, "walletAddress");
        }

        const doesExist = await User.findOne({ email: email });
        let userId;
        if (!doesExist) {
            const user = new User({ email: `${email}`, walletAddress: walletAddress });
            const savedUser = await user.save(); 
            userId=savedUser.id;
        }else{
           userId=doesExist.id;
        }

        const accessToken=await signAccessToken(userId);

        return res.status(200).send({
            success: true,
            message: "Access Key genrated successfully.",
            accessToken
        });

    } catch (exception) {
        return internalServerException(res, exception);
    }
}

module.exports = { createPingLink, getPingLink,getPingLinkById };