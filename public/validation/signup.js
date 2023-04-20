const signupForm = document.querySelector('#signup-form')
const validUsername = document.querySelector('.valid-username')
const validEmail = document.querySelector('.valid-email')
const validPassword = document.querySelector('.valid-password')
const success = document.querySelector('.success')
const failed = document.querySelector('.failed')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

validUsername.style.display = 'none'
validEmail.style.display = 'none'
validPassword.style.display = 'none'
success.style.display = 'none'
failed.style.display = 'none'

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (username.value === '') {
    validUsername.style.display = 'block'
    validUsername.textContent = 'Username is required*'
  } else if (username.value.length >= 20) {
    validUsername.style.display = 'block'
    validUsername.textContent = 'Maximum size is 20*'
  } else if (email.value === '') {
    validUsername.style.display = 'none'
    validEmail.style.display = 'block'
    validEmail.textContent = 'Email is required*'
  } else if (!email.value.split('').includes('.', '@')) {
    validUsername.style.display = 'none'
    validEmail.style.display = 'block'
    validEmail.textContent = 'Wrong email value*'
  } else if (email.value.length >= 30) {
    validUsername.style.display = 'none'
    validEmail.style.display = 'block'
    validEmail.textContent = 'Maximum size is 30*'
  } else if (email.value.split('').includes(' ')) {
    validUsername.style.display = 'none'
    validEmail.style.display = 'block'
    validEmail.textContent = 'Can not use space character in email'
  } else if (password.value === '') {
    validEmail.style.display = 'none'
    validPassword.style.display = 'block'
    validPassword.textContent = 'Password is required*'
  } else if (password.value.length < 6) {
    validEmail.style.display = 'none'
    validPassword.style.display = 'block'
    validPassword.textContent = 'Minimum size is 6*'
  } else if (password.value.length > 30) {
    validEmail.style.display = 'none'
    validPassword.style.display = 'block'
    validPassword.textContent = 'Maximum size is 30*'
  } else {
    validUsername.style.display = 'none'
    validEmail.style.display = 'none'
    validPassword.style.display = 'none'
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          failed.style.display = 'block'
          failed.textContent = data.data.message
          setTimeout(() => {
            failed.style.display = 'none'
          }, 3000)
        } else {
          success.style.display = 'block'
          success.textContent = data.data.message
          setTimeout(() => {
            username.value = ''
            email.value = ''
            password.value = ''
            success.style.display = 'none'
          }, 3000)
        }
      })
      .catch((err) => console.log('error', err))
  }
})
