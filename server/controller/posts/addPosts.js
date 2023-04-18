const { postSchema } = require('../../validation/schema')
const { postQuery } = require('../../database/query')

const addPosts = (req, res) => {
  const { post } = req.body
  const { myToken } = req

  postSchema
    .validateAsync({ post }, { abortEarly: false })
    .then(() => {
      postQuery({ post, myToken })
        .then(() => {
          res.status(201).json({
            error: false,
            data: {
              message: 'Your post has been created successfully'
            }
          })
        })
        .catch((err) => {
          console.error(err)
          res.status(500).json({
            error: true,
            data: {
              message: 'An error occurred while creating your post'
            }
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(400).json({
        error: true,
        data: {
          message: 'Invalid input data'
        }
      })
    })
}

module.exports = addPosts
