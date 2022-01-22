const autorize = (req, res, next) => {
    const { user } = req.query
    if (user == 'john') {
        req.user = { user: 'john' }
        next()
    } else {
        res.status(404).send('unaothorize')
    }
    next()
}
module.exports = autorize 