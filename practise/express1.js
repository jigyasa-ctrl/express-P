const express = require('express'); //import express
const app = express(); //invoke express 

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})

app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/about', (req, res) => {
    res.send('about page')
})

//all is used for all - incase in cannot find a path, it will come to all
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})
app.get
app.post
app.put
app.delete
app.all
