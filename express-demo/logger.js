function log(req, res, next) {
    console.log('Logging... ');
    // shows the newer middleware function in pileline; without it request will go on indefinately
    next();
}

module.exports = log;