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

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, limit)
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({ success: true, data: [] }) //return or it will giveerror becausejs keepsreading and willgo to next line
    }
    res.status(200).json(sortedProducts)
})
app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
})