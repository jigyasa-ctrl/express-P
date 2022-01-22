const express = require('express');
const app = express();
const { people } = require('./data');
// static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false }))
app.get('/api/people', (req, res) => {
    res.status(200).json({ status: 'success', data: people })
})
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