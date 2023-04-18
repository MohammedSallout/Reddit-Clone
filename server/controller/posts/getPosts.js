const { getPostsQuery } = require('../../database/query')

const getPosts = (req, res) => {
  getPostsQuery()
    .then((data) => res.status(200).json(data.rows))
    .catch((err) => console.log(err))
}

module.exports = getPosts
