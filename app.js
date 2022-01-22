const express = require('express');
const app = express();
const router = require('./routes/people')
// static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))

//middleware to parse the incomning json data in post payload http javascript request
app.use(express.json())

//using router for routes
// sets middleware router for all with api.people route
app.use('/api/people', router)

app.post('/login', (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(`Welcome ${name}`)
    } else {
        res.status(401).send('Please provide proper crendentials')
    }
})

app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
}) 