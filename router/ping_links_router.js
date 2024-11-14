const { createPingLink, getPingLink, getPingLinkById, updatePinglink } = require('../controller/ping_links_controller');
const { verifyAccessToken } = require('../helpers/jwt_helper');

const pingLinkRouter = require("express").Router();

pingLinkRouter.post("/createPingLink",verifyAccessToken, createPingLink);
pingLinkRouter.post("/updatePingLink/:id",verifyAccessToken, updatePinglink);
pingLinkRouter.get("/getPingLink",verifyAccessToken, getPingLink);
pingLinkRouter.get("/getPingLink/:id",verifyAccessToken, getPingLinkById);

module.exports = { pingLinkRouter };