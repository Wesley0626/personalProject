require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const uc = require('./controllers/userControllers')
const jc = require('./controllers/jobController')
const authCheck = require('./middleware/authCheck')
const initSession = require('./middleware/initSession')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
)

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(initSession)

app.post('/api/login', uc.login)
app.post('/api/signup', uc.signup)
app.get('/api/user', authCheck, uc.getUser)
app.delete('/api/logout', uc.logout)
app.get('/api/jobs', jc.getJobs)
app.delete('/api/jobs/delete/jobId', jc.deleteJob)
app.put('/api/jobs/edit/jobId', jc.editJob)
app.post('/api/jobs/save', jc.saveJob)


app.listen(SERVER_PORT, () => console.log(`Super Man killing innocents on ${SERVER_PORT}`))