require('dotenv').config()
const app = require('express')()
const massive = require('massive')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let {CONNECTION_STRING}=process.env;

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('Postgress Online')
}).catch(console.error("Db disconnected"))

let PORT = 3005


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
