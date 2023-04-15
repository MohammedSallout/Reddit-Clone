const comments = document.querySelector('.comments')
const comment = document.querySelector('.comment')

comments.addEventListener('click', (e) => {
  comment.classList.toggle('hide-comments')
})

/* Start popup */
const createPost = document.querySelector('.create-post')
const popup = document.querySelector('.popup')
const submitPost = document.getElementById('submit-post')
const overlay = document.getElementById('overlay')

createPost.addEventListener('click', showPopup)

function showPopup () {
  popup.style.display = 'block'
  overlay.className = 'overlay'
}

submitPost.addEventListener('click', closePopup)
overlay.addEventListener('click', closeOverlay)

function closePopup () {
  closeOverlay()
}

function closeOverlay () {
  popup.style.display = 'none'
  overlay.removeAttribute('class')
}
/* End popup */
