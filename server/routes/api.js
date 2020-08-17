const express = require('express')
const router = express.Router()

let User = require('../models/users')

router.get('/', (req, res) => {
    res.send('hi all')
})

router.route('/register').post(function (req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'})
        })
        .catch(err => {
            res.status(400).send('adding user failed')
        })
});

router.route('/login').post(function (req, res) {
    let userData = new User(req.body);

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else if (user.password !== userData.password) {
                res.status(401).send('Invalid Password')
            } else {
                res.status(200).send(user)
            }
        }
    })

});




module.exports = router
