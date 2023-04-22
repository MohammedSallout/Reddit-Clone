const signUpIcon = document.querySelector('header .nav li.signup')
const loginIcon = document.querySelector('header .nav li.login')
const logoutIcon = document.querySelector('header .nav li.logout')
const avatarIcon = document.querySelector('header .nav .avatar')
const createPostBtn = document.querySelector('header .nav .create-post')

if (document.cookie.includes('token')) {
  signUpIcon.style.display = 'none'
  loginIcon.style.display = 'none'
}

logoutIcon.addEventListener('click', () => {
  fetch('/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session: 'logout' })
  })
    .then(() => {
      window.location.href = '/html'
    })
    .catch((err) => console.log(err))
})

if (!document.cookie.includes('token')) {
  logoutIcon.style.display = 'none'
  avatarIcon.style.display = 'none'
}

/* Start popup */
const createPost = document.querySelector('.create-post')
const popup = document.querySelector('.popup')
const submitPost = document.getElementById('submit-post')
const overlay = document.getElementById('overlay')
const post = document.getElementById('post')

createPost.addEventListener('click', showPopup)

function showPopup () {
  popup.style.display = 'block'
  overlay.className = 'overlay'
  post.focus()
}

submitPost.addEventListener('click', () => {
  if (post.value !== '') {
    popup.style.display = 'none'
    overlay.removeAttribute('class')
  }
})

post.addEventListener('keyup', () => {
  if (post.value.split('').every((char) => char === ' ')) {
    submitPost.setAttribute('disabled', 'disabled')
    submitPost.style.cursor = 'auto'
  } else {
    submitPost.removeAttribute('disabled')
    submitPost.style.cursor = 'pointer'
  }
})

overlay.addEventListener('click', () => {
  popup.style.display = 'none'
  overlay.removeAttribute('class')
})

/* End popup */

if (!document.cookie.includes('token')) {
  createPostBtn.addEventListener('click', () => {
    alert('Login To Your Account First !!')
    popup.style.display = 'none'
    overlay.removeAttribute('class')
  })

  document.addEventListener('click', (e) => {
    if (e.target.textContent === 'Add Comment') {
      e.target.setAttribute('disabled', 'disabled')
      alert('Login To Your Account First !!')
    }
  })
}
