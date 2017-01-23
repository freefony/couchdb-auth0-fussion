//const/let
const admin_username = process.env.uname
const admin_password = process.env.pass

module.exports = {
  dev: {
    protocol: 'http',
    baseUrl: 'localhost',
    port: '5984',
    paths: {
      users: '/_users/',
      session: '/_session/'
    },
    auth: admin_username + ':' + admin_password
  }
}