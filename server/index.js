require('dotenv').config({path: __dirname + '/../.env'})
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const uc = require('./controllers/userControllers')
const jc = require('./controllers/jobController')
const mc = require('./controllers/messageController')
const ec = require('./controllers/emailController')
const authCheck = require('./middleware/authCheck')
const initSession = require('./middleware/initSession')
const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env
const path = require('path')

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

app.use(express.json())

app.post('/api/login', uc.login)
app.post('/api/signup', uc.signup)
app.get('/api/user', authCheck, uc.getUser)
app.delete('/api/logout', uc.logout)
app.get('/api/allusers', uc.getAllUsers)

app.post('/api/createroom', mc.createRoom)
app.get('/api/messages', mc.getMessages)
app.get('/api/rooms', mc.getRooms)
app.post('/api/messages/save', mc.saveMessage)
app.get('/api/rooms/unique/:user_id', mc.getUniqueRooms)

app.get('/api/jobs', jc.getJobs)
app.get('/api/jobsbyuser', jc.getJobsByUser)
app.get('/api/assignedjobs', jc.getAssignedJobs)
app.delete('/api/jobs/delete/:jobId', jc.deleteJob)
app.put('/api/jobs/edit/:jobId', jc.editJob)
app.post('/api/jobs/save', jc.saveJob)
app.put('/api/jobs/assignjob/:jobId', jc.assignJob)
app.put('/api/completejob/:jobId', jc.completeJob)

app.post('/api/password/reset', ec.sendEmail)

app.use(express.static(__dirname+'/../build'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => console.log(`Super Man killing innocents on ${SERVER_PORT}`))