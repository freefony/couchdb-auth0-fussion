//const/let
const admin_username = process.env.uname
const admin_password = process.env.pass

module.exports = {
  dev: {
    CouchDB_URL: 'http://' + admin_username + ':' + admin_password + '@localhost:5984/_users'
  }
}