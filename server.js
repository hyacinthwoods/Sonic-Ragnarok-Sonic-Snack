//DEPENDENCIES
const express = require('express')
const app = express()


//Middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//Routes
const home = require home('./home');
app.use('/', home);


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`ported here: ${process.env.PORT}`)
})