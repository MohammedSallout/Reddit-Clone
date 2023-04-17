const connection = require('../../config/connection')

const loginQuery = (userData) => {
  const { email } = userData

  const sql = {
    text: 'SELECT id, username, email, password, avatar FROM users WHERE email=$1 ;',
    values: [email]
  }

  return connection.query(sql)
}

module.exports = loginQuery
