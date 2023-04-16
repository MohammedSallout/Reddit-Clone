const connection = require('../../config/connection')

const signUpQuery = (userData) => {
  const { username, email, password } = userData

  const sql = {
    text: 'INSERT INTO users (username, email ,password) VALUES ($1 , $2, $3)',
    values: [username, email, password]
  }

  return connection.query(sql)
}

module.exports = signUpQuery
