require('dotenv').config()
const express = require('express');
const app = express()
const axios = require('axios')
const massive = require('massive')

let {
    PORT
} = process.env

app.use(express.json)



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
