const express = require('express')
const app = express()
const PORT = 3017
const http = require('http')
const bodyParser = require('body-parser')
const createUserAccount = require('./couchdb-auth-api').createUser


app.use(bodyParser.urlencoded({extend: true}))

app.get('/', () => {
   //current user? session?
})

app.post('/signup', (req, res) => {
  createUserAccount(req.body, (user) => {
    res.write(user)
    res.end()
  })
})

app.post('/login', (req, res) => {
  
})

app.post('/logout', (req, res) => {
  
})

app.listen(PORT || 3000,  () => {
  console.log('Example app listening on port ' + PORT || 3000)
})