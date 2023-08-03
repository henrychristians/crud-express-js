const LogRequest = (req, res, next) => {
    console.log(`LOG REQ TERJADI KE (${req.path}) DENGAN METHOD (${req.method})`);
    next();
}

module.exports = LogRequest;