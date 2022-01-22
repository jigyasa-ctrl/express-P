const express = require('express');
const app = express();

//logger is the middleware function
const logger = (req, res, next) => {
    const method = req.method
    console.log(method)
    //now you must always either terminiate the process by sen ding by the response
    //res.send('testing')
    //or you pass the middleware on to the next middleware
    next()

}
//req => middleware => res
app.get('/', logger, (req, res) => {

    res.send('homepage')
})

app.get('/about', logger, (req, res) => {
    res.send('about')
})
app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
})

//------------------------------------------
// with logger moved to different file
const express = require('express');
const app = express();
const logger = require('./logger')


//req => middleware => res
//now instead of adding logger to every route we use app.use
app.use(logger)
app.get('/', (req, res) => {

    res.send('homepage')
})

app.get('/about', (req, res) => {
    res.send('about')
})
app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
})

//------------------
//with multiple logger 
const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorise')


//req => middleware => res
//now instead of adding logger to every route we use app.use
app.use([logger, authorize]) //order matters

// 1. use vs route 
app.get('/', (req, res) => {

    res.send(' homepage')
})

app.get('/about', (req, res) => {
    console.log(req.user)
    res.send('about')
})
app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
})