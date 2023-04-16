const signupForm = document.querySelector('#signup-form')
const validUsername = document.querySelector('.valid-username')
const validEmail = document.querySelector('.valid-email')
const validPassword = document.querySelector('.valid-password')
const success = document.querySelector('.success')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (username.value === '') {
    validUsername.textContent = 'Username is required*'
  } else if (username.value.length >= 20) {
    validUsername.textContent = 'Maximum size is 20*'
  } else if (email.value === '') {
    validUsername.textContent = ''
    validEmail.textContent = 'Email is required*'
  } else if (!email.value.split('').includes('.', '@')) {
    validUsername.textContent = ''
    validEmail.textContent = 'Wrong email value*'
  } else if (email.value.length >= 20) {
    validUsername.textContent = ''
    validEmail.textContent = 'Maximum size is 20*'
  } else if (password.value === '') {
    validEmail.textContent = ''
    validPassword.textContent = 'Password is required*'
  } else if (password.value.length < 6) {
    validEmail.textContent = ''
    validPassword.textContent = 'Minimum size is 6*'
  } else if (password.value.length > 15) {
    validEmail.textContent = ''
    validPassword.textContent = 'Maximum size is 15*'
  } else {
    validUsername.textContent = ''
    validEmail.textContent = ''
    validPassword.textContent = ''
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value
      })
    })
      .then(() => {
        window.location.href = '/html/signup.html'
        success.textContent = 'Sign Up Successfully'
      })
      .catch((err) => console.log('error', err))
  }
})
