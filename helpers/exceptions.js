const internalServerException = (res, exception) => {
  return  res.status(500).send({
        success: false,
        message: "Internal Server Error!",
        reason: exception
    });
}

module.exports = { internalServerException };