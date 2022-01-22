const express = require('express');
const app = express();
const { people } = require('./data');
// static assets
app.use(express.static('./methods-public'))
//parse form data
app.use(express.urlencoded({ extended: false }))
//middleware to parse the incomning json data in post payload http javascript request
app.use(express.json())
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
app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send({ success: false, msg: 'Please provide name value ' })
    } else {
        res.status(201).json({ success: true, person: name })

    }

})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send({ success: false, msg: 'Please provide name value ' })
    } else {
        res.status(201).json({ success: true, person: [...people, name] })

    }

})
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const person = people.find((people) => people.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: "person doesn't exist with that id" })
    }
    const newPerson = people.map((person) => {
        if (person.id == Number(id)) {
            person.name = name

        }
        return person
    })
    res.status(200).json({ success: true, data: newPerson })
})

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params
    const person = people.find((people) => people.id === Number(id))
    if (!person) {
        return res.staus(404).send({ success: false, msg: 'User with that id doesn"t exist' })
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(201).json({ success: true, data: newPeople })
})
app.listen(8000, (req, res) => {
    console.log('listeing on 8000')
}) 