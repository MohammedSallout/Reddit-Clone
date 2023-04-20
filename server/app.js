const path = require('path')
const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const router = require('./router')
const { clientError, serverError } = require('./controller/error/error')

const app = express()

app.set('port', process.env.PORT || 4000)

app.disable('x-powered-by')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(router)
app.use(clientError)
app.use(serverError)

module.exports = app
