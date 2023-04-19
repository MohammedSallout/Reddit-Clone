const avatarDiv = document.querySelector('header .nav .avatar')

const homeAvatar = () => {
  const profileLink = document.createElement('a')
  profileLink.href = '/html/profile.html'
  avatarDiv.appendChild(profileLink)

  const avatar = document.createElement('img')
  avatar.src = 'https://i.ibb.co/16Sm9dH/avatar.png'
  profileLink.appendChild(avatar)
}

homeAvatar()

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

const commentDOMElement = (comment, commentData) => {
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
  avatar.src = commentData.avatar
  avatarDiv.appendChild(avatar)

  const userLink = document.createElement('a')
  userLink.href = '/html/profile.html'
  userLink.textContent = commentData.username
  top.appendChild(userLink)

  const createdAt = document.createElement('span')
  createdAt.className = 'created-at'
  createdAt.textContent = commentData.created_at
  top.appendChild(createdAt)

  const textDiv = document.createElement('div')
  textDiv.className = 'text'
  commentContent.appendChild(textDiv)

  const commentText = document.createElement('p')
  commentText.textContent = commentData.message
  textDiv.appendChild(commentText)
}

const container = document.querySelector('.posts .container')

// eslint-disable-next-line no-unused-vars
const postDOMElement = (postData) => {
  const post = document.createElement('div')
  post.id = postData.id
  post.className = 'post'
  container.appendChild(post)

  const top = document.createElement('div')
  top.className = 'top'
  post.appendChild(top)

  const avatarDiv = document.createElement('div')
  avatarDiv.className = 'avatar'
  top.appendChild(avatarDiv)

  const avatar = document.createElement('img')
  avatar.src = postData.avatar
  avatarDiv.appendChild(avatar)

  const username = document.createElement('h4')
  top.appendChild(username)

  const userLink = document.createElement('a')
  userLink.href = '/html/profile.html'
  userLink.textContent = postData.username
  username.appendChild(userLink)

  const createdAt = document.createElement('span')
  createdAt.className = 'created-at'
  createdAt.textContent = postData.created_at
  top.appendChild(createdAt)

  const center = document.createElement('div')
  center.className = 'center'
  post.appendChild(center)

  const postText = document.createElement('p')
  postText.textContent = postData.content
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

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('/add-comment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment: input.value,
        postId: post.id
      })
    })
      .then(() => {
        window.location.href = '/'
      })
      .catch((err) => console.log(err))
  })

  const comments = document.querySelectorAll('.comments')

  comments.forEach((ele, i) => {
    const x = ele.id = postData.id
    if (+x === i + 1) {
      ele.addEventListener('click', () => {
        comment.classList.toggle('hide-comments')
      })
    }
  })

  fetch('/comments')
    .then((res) => res.json())
    .then((data) => data.forEach((commentData) => {
      if (+commentData.id === +post.id) {
        commentDOMElement(comment, commentData)
      }
    }))
    .catch((err) => console.log(err))
}

const postForm = document.getElementById('post-form')
const postContent = document.getElementById('post')

postForm.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('/add-post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      post: postContent.value
    })
  })
    .then(() => {
      window.location.href = '/'
    })
    .catch((err) => console.log(err))
})

fetch('/posts')
  .then((res) => res.json())
  .then((data) => data.forEach((postData) => postDOMElement(postData)))
  .catch((err) => console.log(err))
