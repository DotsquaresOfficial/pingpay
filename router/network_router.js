const { getnetworks, getNetworkById } = require('../controller/networks_controller');
const { verifyAccessToken } = require('../helpers/jwt_helper');

const networkRouter = require("express").Router();

networkRouter.get("/getNetworks",verifyAccessToken, getnetworks);
networkRouter.get("/getNetworkById/:id",verifyAccessToken, getNetworkById);

module.exports = { networkRouter };