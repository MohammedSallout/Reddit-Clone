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
  userLink.href = '#'
  userLink.textContent = 'Username'
  top.appendChild(userLink)

  const textDiv = document.createElement('div')
  textDiv.className = 'text'
  commentContent.appendChild(textDiv)

  const commentText = document.createElement('p')
  commentText.textContent = 'Wow, good job my friend.'
  textDiv.appendChild(commentText)
}

const container = document.querySelector('.posts .container')

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
  userLink.href = '#'
  userLink.textContent = 'Username'
  username.appendChild(userLink)

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

postDOMElement()
