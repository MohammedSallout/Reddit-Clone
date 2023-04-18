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
