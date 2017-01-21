//const/let

const configMod = require('./config')
const env = process.env.NODE_ENV
const config = configMod[env]
const couchdbUserIDPrefix = 'org.couchdb.user:'
let options = {
  hostname: config.baseUrl,
  port: config.port,
  auth: config.auth
}

if (config.protocol === 'http') {
  fetchAPI = require('http')
} else {
  fetchAPI = require('https')
}

module.exports.createUser = (user, callback) => {
  options.path = config.paths.users + couchdbUserIDPrefix + user.name.trim()
  options.method = 'PUT'

  let response = ''
  const req = fetchAPI.request(options, (res)=> {
    res.on('data', (d) => {
      response += d
    })
    
    res.on('end', () => {
      callback(response)
    })
  })

  req.on('error', (err) => {
    callback(err)
  })
  req.write(JSON.stringify(user))
  req.end()
}