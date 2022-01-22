const express = require('express');
const router = express.Router()
const {
    getPeople,
    createPerson,
    updatePerson,
    deleteperson } = require('../controllers/people')

router.get('/', getPeople)
router.post('/postman', createPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deleteperson)

//another way to write it
// router.route('/').get(getPeople)
// router.route('/postman').post(createPerson)
// router.route('/:id').put(updatePerson).delete(deleteperson)
module.exports = router