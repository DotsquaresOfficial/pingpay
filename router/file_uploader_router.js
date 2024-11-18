const { uploadFile } = require('../controller/file_upload_controller');
const { verifyAccessToken } = require('../helpers/jwt_helper');

const uploadFileRouter = require("express").Router();

uploadFileRouter.post("/upload",verifyAccessToken, uploadFile);

module.exports = { uploadFileRouter };