// Set Server dependencies : 
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv').config()
const connection = require('./config/config')
const bodyParser = require('body-parser')
const route = require("./routes/index")
const port = 4000
const app = express()

// Server Uses :
app.use(cors('*'))
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Entry point of server 'http://localhost:4000/'
app.get('/', (req, res) => {
    res.send("Welcome on your Node/Express server !").status(200)
})

//Routes for User 
app.use("/user", route.user)

//Route for Combat
app.use("/combat", route.combat)

//Route for Gladiator
app.use("/gladiator", route.gladiator)

app.listen(port, err => {
    if (err){ throw new Error('👎 👎  -- Something bad happened... server not connected -- 👎 👎 ')}
    console.log(`😎😎 -- Node/Express Server is listening on ${port} -- 😎😎`)
}) 