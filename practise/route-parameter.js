const express = require('express');
const app = express();
const { products } = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page </h1><a href=api/products>Products</a>')
})
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId))
    if (!singleProduct) {
        return res.status(404).send('Product does not exists')
    }
    res.json(singleProduct)
})


app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
})