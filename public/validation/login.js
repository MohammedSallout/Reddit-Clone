const loginForm = document.querySelector('#login-form')
const validEmail = document.querySelector('.valid-email')
const validPassword = document.querySelector('.valid-password')
const success = document.querySelector('.success')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (email.value === '') {
    validEmail.textContent = 'Email is required*'
  } else if (!email.value.split('').includes('.', '@')) {
    validEmail.textContent = 'Wrong email value*'
  } else if (email.value.length >= 20) {
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
    validPassword.textContent = ''
    window.location.href = '/html'
    success.textContent = 'Login Successfully'
  }
})
