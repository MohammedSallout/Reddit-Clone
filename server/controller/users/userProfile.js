const path = require('path')

const profilePage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'profile.html'))
}

module.exports = profilePage
