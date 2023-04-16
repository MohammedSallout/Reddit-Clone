const avatarDiv = document.querySelector('header .nav .avatar')

// eslint-disable-next-line no-unused-vars
const homeAvatar = () => {
  const profileLink = document.createElement('a')
  profileLink.href = '/html/profile.html'
  avatarDiv.appendChild(profileLink)

  const avatar = document.createElement('img')
  avatar.src = 'https://i.ibb.co/16Sm9dH/avatar.png'
  profileLink.appendChild(avatar)
}

const profileTop = document.querySelector('.profile .profile-top')

// eslint-disable-next-line no-unused-vars
const userProfile = () => {
  const avatarDiv = document.createElement('div')
  avatarDiv.className = 'avatar'
  profileTop.appendChild(avatarDiv)

  const avatar = document.createElement('img')
  avatar.src = 'https://i.ibb.co/16Sm9dH/avatar.png'
  avatarDiv.appendChild(avatar)

  const username = document.createElement('h3')
  profileTop.appendChild(username)

  const userLink = document.createElement('a')
  userLink.href = '/html/profile.html'
  userLink.textContent = 'Username'
  username.appendChild(userLink)
}

const commentDOMElement = (comment) => {
  const commentContent = document.createElement('div')
  commentContent.className = 'comment-content'
  comment.appendChild(commentContent)

  const top = document.createElement('div')
  top.className = 'top'
  commentContent.appendChild(top)

  const avatarDiv = document.createElement('div')
  avatarDiv.className = 'avatar'
  top.appendChild(avatarDiv)

  const avatar = document.createElement('img')
  avatar.src = 'https://i.ibb.co/16Sm9dH/avatar.png'
  avatarDiv.appendChild(avatar)

  const userLink = document.createElement('a')
  userLink.href = '/html/profile.html'
  userLink.textContent = 'Username'
  top.appendChild(userLink)

  const createdAt = document.createElement('span')
  createdAt.className = 'created-at'
  createdAt.textContent = '2016-06-22 19:10:25'
  top.appendChild(createdAt)

  const textDiv = document.createElement('div')
  textDiv.className = 'text'
  commentContent.appendChild(textDiv)

  const commentText = document.createElement('p')
  commentText.textContent = 'Wow, good job my friend.'
  textDiv.appendChild(commentText)
}

const container = document.querySelector('.posts .container')

// eslint-disable-next-line no-unused-vars
const postDOMElement = () => {
  const post = document.createElement('div')
  post.className = 'post'
  container.appendChild(post)

  const top = document.createElement('div')
  top.className = 'top'
  post.appendChild(top)

  const avatarDiv = document.createElement('div')
  avatarDiv.className = 'avatar'
  top.appendChild(avatarDiv)

  const avatar = document.createElement('img')
  avatar.src = 'https://i.ibb.co/16Sm9dH/avatar.png'
  avatarDiv.appendChild(avatar)

  const username = document.createElement('h4')
  top.appendChild(username)

  const userLink = document.createElement('a')
  userLink.href = '/html/profile.html'
  userLink.textContent = 'Username'
  username.appendChild(userLink)

  const createdAt = document.createElement('span')
  createdAt.className = 'created-at'
  createdAt.textContent = '2016-06-22 19:10:25'
  top.appendChild(createdAt)

  const center = document.createElement('div')
  center.className = 'center'
  post.appendChild(center)

  const postText = document.createElement('p')
  postText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimusaut veritatis dolorum ullam accusantium minima consequuntur.'
  center.appendChild(postText)

  const bottom = document.createElement('div')
  bottom.className = 'bottom'
  post.appendChild(bottom)

  const left = document.createElement('div')
  left.className = 'left'
  bottom.appendChild(left)

  const commentIcon = document.createElement('i')
  commentIcon.className = 'fa-solid fa-comment'
  left.appendChild(commentIcon)

  const commentsTap = document.createElement('span')
  commentsTap.className = 'comments'
  commentsTap.textContent = 'Comments'
  left.appendChild(commentsTap)

  const votes = document.createElement('div')
  votes.className = 'votes'
  bottom.appendChild(votes)

  const upIcon = document.createElement('i')
  upIcon.id = 'up'
  upIcon.className = 'fa-solid fa-chevron-up'
  votes.appendChild(upIcon)

  const voteNum = document.createElement('span')
  voteNum.className = 'vote'
  voteNum.textContent = '36K'
  votes.appendChild(voteNum)

  const downIcon = document.createElement('i')
  downIcon.id = 'down'
  downIcon.className = 'fa-solid fa-chevron-down'
  votes.appendChild(downIcon)

  const comment = document.createElement('div')
  comment.className = 'comment hide-comments'
  post.appendChild(comment)

  const form = document.createElement('form')
  form.action = ''
  form.method = 'post'
  comment.appendChild(form)

  const input = document.createElement('input')
  input.type = 'text'
  input.name = 'comment'
  input.placeholder = 'Add New Comment'
  input.setAttribute('required', 'required')
  form.appendChild(input)

  const commentBtn = document.createElement('button')
  commentBtn.textContent = 'Comment'
  form.appendChild(commentBtn)

  commentDOMElement(comment)
}
