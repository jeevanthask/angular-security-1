const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 3000
const api = require('./routes/api')

mongoose.connect('mongodb://127.0.0.1:27017/AngularAuth', {useNewUrlParser: true})
const connection = mongoose.connection

connection.once('open', function () {
    console.log('mongodb connection established successfully')
})

app.use('/api',api)


app.get('/',(req,res) => {
    res.send('welcome all guys')
})













app.listen(PORT,() => console.log('listening in port 3000'))

