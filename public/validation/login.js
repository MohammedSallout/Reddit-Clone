const loginForm = document.querySelector('#login-form')
const validEmail = document.querySelector('.valid-email')
const validPassword = document.querySelector('.valid-password')
const success = document.querySelector('.success')
const failed = document.querySelector('.failed')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

validEmail.style.display = 'none'
validPassword.style.display = 'none'
success.style.display = 'none'
failed.style.display = 'none'

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (email.value === '') {
    validEmail.style.display = 'block'
    validEmail.textContent = 'Email is required*'
  } else if (!email.value.split('').includes('.', '@')) {
    validEmail.style.display = 'block'
    validEmail.textContent = 'Wrong email value*'
  } else if (email.value.length >= 30) {
    validEmail.style.display = 'block'
    validEmail.textContent = 'Maximum size is 30*'
  } else if (email.value.split('').includes(' ')) {
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
    validEmail.style.display = 'none'
    validPassword.style.display = 'none'
    const emailValue = email.value
    const passwordValue = password.value
    const data = {
      email: emailValue,
      password: passwordValue
    }
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          failed.style.display = 'block'
          failed.textContent = data.msg
          setTimeout(() => {
            failed.style.display = 'none'
          }, 3000)
        } else {
          success.style.display = 'block'
          success.textContent = data.msg
          setTimeout(() => {
            window.location.href = '/'
          }, 1000)
        }
      })
      .catch((err) => console.log('error', err))
  }
})
