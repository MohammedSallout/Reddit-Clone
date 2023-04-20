const jwt = require('jsonwebtoken')
const { getUserPostsQuery } = require('../../database/query')

const getUserPosts = (req, res) => {
  const token = req.cookies.token
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.json({ msg: 'verify token error' })
      } else {
        req.myToken = decoded
      }
    })
  }
  const { myToken } = req
  getUserPostsQuery(myToken)
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = getUserPosts
