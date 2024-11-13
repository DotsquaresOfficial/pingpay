const { getAccessKey, getUserDetails } = require('../controller/auth_controller');
const { verifyAccessToken } = require('../helpers/jwt_helper');

const authRouter = require("express").Router();

authRouter.post("/getAccessKey", getAccessKey);
authRouter.get("/getUserDetails",verifyAccessToken, getUserDetails);

module.exports = { authRouter };