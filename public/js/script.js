const signUpIcon = document.querySelector('header .nav li.signup')
const logoutIcon = document.querySelector('header .nav li.logout')
const avatarIcon = document.querySelector('header .nav .avatar')

if (document.cookie.includes('token')) {
  signUpIcon.style.display = 'none'
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

overlay.addEventListener('click', () => {
  popup.style.display = 'none'
  overlay.removeAttribute('class')
})

/* End popup */
