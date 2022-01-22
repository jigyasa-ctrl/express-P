const logger = (req, res, next) => {
    const method = req.method
    console.log(method)
    //now you must always either terminiate the process by sen ding by the response
    //res.send('testing')
    //or you pass the middleware on to the next middleware
    next()
}

module.exports = logger