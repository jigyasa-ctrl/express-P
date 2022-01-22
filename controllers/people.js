const { people } = require('../data');

const getPeople = (req, res) => {
    res.status(200).json({ status: 'success', data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).send({ success: false, msg: 'Please provide name value ' })
    } else {
        res.status(201).json({ success: true, person: [...people, name] })

    }

}
const updatePerson = (req, res) => {
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
}

const deleteperson = (req, res) => {
    const { id } = req.params
    const person = people.find((people) => people.id === Number(id))
    if (!person) {
        return res.staus(404).send({ success: false, msg: 'User with that id doesn"t exist' })
    }
    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(201).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deleteperson
}