const express = require('express')
const router = express.Router()

let User = require('../models/users')

router.get('/', (req, res) => {
    res.send('hi all')
})

router.route('/register').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(book => {
            res.status(200).json({'user': 'user added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding user failed')
        })
});








module.exports = router
