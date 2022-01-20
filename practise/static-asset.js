const express = require('express'); //import express
const path = require('path')
const app = express(); //invoke express 

app.listen(8000,() => {
    console.log('Server is listening on port 8000')
})


//setup static and middleware - static is an asset where server does't need to change it and data is sored in designated place
//tells the app to use resources from which path 
//app.use is for setting up the middleware 
app.use(express.static('./navbar-app'))

//no need to necesserily use res.sendFile
// app.get('/', (req, res) => {
//     //we want to send a html file
// res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

//two ways to send index file -
// adding to static assets
// SSR - template engine
// })


//all is used for all - incase in cannot find a path, it will come to all
app.all('*',(req, res) => {
   res.status(404).send('<h1>resource not found</h1>')
})
app.get
app.post
app.put
app.delete
app.all
