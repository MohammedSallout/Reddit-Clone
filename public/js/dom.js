const avatarDiv = document.querySelector('header .nav .avatar')
avatarDiv.textContent = 'Waiting...'

const homeAvatar = (userData) => {
  const profileLink = document.createElement('a')
  profileLink.href = `/profile/${userData.id}`
  setTimeout(() => {
    avatarDiv.textContent = ''
    avatarDiv.appendChild(profileLink)
  }, 5000)

  const avatar = document.createElement('img')
  avatar.src = userData.avatar
  profileLink.appendChild(avatar)

  const userName = document.createElement('span')
  userName.textContent = userData.username
  profileLink.appendChild(userName)
}

fetch('/users')
  .then((res) => res.json())
  .then((data) => data.forEach((userData) => homeAvatar(userData)))
  .catch((err) => console.log(err))

const commentDOMElement = (comment, commentData) => {
  comment.innerHTML = ''
  commentData.forEach(ele => {
    const commentContent = document.createElement('div')
    commentContent.className = 'comment-content'
    comment.prepend(commentContent)

    const top = document.createElement('div')
    top.className = 'top'
    commentContent.appendChild(top)

    const avatarDiv = document.createElement('div')
    avatarDiv.className = 'avatar'
    top.appendChild(avatarDiv)

    const avatar = document.createElement('img')
    avatar.src = ele.avatar
    avatarDiv.appendChild(avatar)

    const userLink = document.createElement('a')
    userLink.href = `/profile/${ele.user_id}`
    userLink.textContent = ele.username
    top.appendChild(userLink)

    const createdAt = document.createElement('span')
    createdAt.className = 'created-at'
    createdAt.textContent = ele.created_at
    top.appendChild(createdAt)

    const textDiv = document.createElement('div')
    textDiv.className = 'text'
    commentContent.appendChild(textDiv)

    const commentText = document.createElement('p')
    commentText.textContent = ele.message
    textDiv.appendChild(commentText)
  })
}

const container = document.querySelector('.posts .container')

const postDOMElement = (postData) => {
  container.innerHTML = ''
  postData.forEach(ele => {
    const post = document.createElement('div')
    post.id = ele.id
    post.className = 'post'
    container.prepend(post)

    const top = document.createElement('div')
    top.className = 'top'
    post.appendChild(top)

    const avatarDiv = document.createElement('div')
    avatarDiv.className = 'avatar'
    top.appendChild(avatarDiv)

    const avatar = document.createElement('img')
    avatar.src = ele.avatar
    avatarDiv.appendChild(avatar)

    const username = document.createElement('h4')
    top.appendChild(username)

    const userLink = document.createElement('a')
    userLink.textContent = ele.username
    userLink.href = `/profile/${ele.user_id}`
    username.appendChild(userLink)

    const createdAt = document.createElement('span')
    createdAt.className = 'created-at'
    createdAt.textContent = ele.created_at
    top.appendChild(createdAt)

    const center = document.createElement('div')
    center.className = 'center'
    post.appendChild(center)

    const postText = document.createElement('p')
    postText.textContent = ele.content
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

    commentsTap.addEventListener('click', () => {
      comment.classList.toggle('hide-comments')
      fetch(`/comments/${ele.id}`)
        .then((res) => res.json())
        .then((data) => {
          commentDOMElement(comment, data)
        }
        )
        .catch((err) => console.log(err))
    })

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

    const input = document.createElement('input')
    input.type = 'text'
    input.name = 'comment'
    input.placeholder = 'Add New Comment'
    input.setAttribute('required', 'required')
    form.appendChild(input)

    const commentBtn = document.createElement('button')
    commentBtn.textContent = 'Add Comment'
    form.appendChild(commentBtn)

    input.addEventListener('keyup', () => {
      if (input.value.split('').every((char) => char === ' ')) {
        commentBtn.setAttribute('disabled', 'disabled')
        commentBtn.style.cursor = 'auto'
      } else {
        commentBtn.removeAttribute('disabled')
        commentBtn.style.cursor = 'pointer'
      }
    })

    left.appendChild(form)

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
          fetch(`/comments/${ele.id}`)
            .then((res) => res.json())
            .then((data) => {
              commentDOMElement(comment, data)
              input.value = ''
            }
            )
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    })
  })
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
      fetch('/posts')
        .then((res) => res.json())
        .then((data) => {
          postDOMElement(data)
          postContent.value = ''
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
})

fetch('/posts')
  .then((res) => res.json())
  .then((data) => postDOMElement(data))
  .catch((err) => console.log(err))
