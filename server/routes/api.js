const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/AngularAuth', {useNewUrlParser: true})
const connection = mongoose.connection

connection.once('open', function () {
    console.log('mongodb connection established successfully')
})


router.get('/', (req, res) => {
    res.send('hi all')
})

module.exports = router
