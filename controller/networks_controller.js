const { internalServerException } = require("../helpers/exceptions");
const network = require("../models/networks_model");


// Get Netowork Links
const getnetworks = async (req, res) => {
    try {
        const networks = await network.find({ active:true }).lean();
        if (!networks.length) {
            res.status(200).json({
                success:true,
                message:"Networks Fetched Successfully.",
                data: [] });
        }
        res.status(200).json({ 
            success:true,
            message:"Networks Fetched Successfully.",
            data: networks });
    } catch (exception) {
        console.log(exception);
        return internalServerException(res, exception);
    }
};


// Get Network by ID
const getNetworkById = async (req, res) => {
    try {
        const { id } = req.params;
        const networkData = await network.findById(id);
        if (!networkData) {
            res.status(200).json({
                success:true,
                message:"Network Fetched Successfully.",
                data: networkData });
        }
        res.status(200).json({
            success:true,
            message:"Network Fetched Successfully.",
            data: networkData });
    } catch (exception) {
        return internalServerException(res, exception);
    }
};



module.exports = {getNetworkById, getnetworks };
