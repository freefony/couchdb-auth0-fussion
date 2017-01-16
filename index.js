const express = require('express')
const app = express()
const PORT = 3017
const http = require('http')
const config = require('./config')

app.get('/', () => {
   //current user? session?
})

app.post('/signup', (req, res) => {
  
})

app.post('/login', (req, res) => {
  
})

app.post('/logout', (req, res) => {
  
})

app.listen(PORT || 3000,  () => {
  console.log('Example app listening on port 3000!')
})