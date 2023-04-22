const { deletePostQuery } = require('../../database/query')

const deletePost = (req, res) => {
  const { postId } = req.body
  deletePostQuery(postId)
    .then((data) => res.status(202).json({ msg: 'Your post delete successfully' }))
    .catch((err) => console.log(err))
}

module.exports = deletePost
