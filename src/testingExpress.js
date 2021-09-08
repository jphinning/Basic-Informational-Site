//External files
const express = require('express')
const fs = require('fs')

//My files
const {options} = require('./jsonObjects')

const app = express()

//Set static folder
app.use(express.static(__dirname + "/../pub"))


app.listen(options.port, options.hostname,() => {
    console.log('All working')
})