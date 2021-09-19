//External files
const express = require('express')
const {connect} = require('mongoose')
const modelApp = require('./models/dbMongo')

//My files  
const {options} = require('./jsonObjects')
const mongodB = 'mongodb+srv://admin:test@cluster0.rvdmx.mongodb.net/dbTest?retryWrites=true&w=majority'

connect(mongodB)

const app = express()

//Using middlewares
app.use((req, res, next) => {
    console.log(`we are the middleware with a next function`)
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Set static folder
// app.use(express.static(__dirname + "/../pub"))

//API GET requestHandler
// app.get('/api/userFinances', (req, res) => res.json(userFinances))
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.post('/', (req, res) => {
    res.send('Got a POST request')
  })


app.use('/users', require('./routes/users'))

app.listen(options.port, options.hostname,() => console.log('All working'))