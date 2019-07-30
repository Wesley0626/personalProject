const bcrypt = require('bcrypt')
const saltRounds = 13

module.exports = {
  async login(req, res) {
    let { username, password } = req.body
    const db = req.app.get('db')
    let [existingUser] = await db.get_user(username)
    if(!existingUser) return res.status(401).send('Username not found')
    let result = await bcrypt.compare(password, existingUser.password)
    if(result){
      req.session.user = {
        username: existingUser.username,
        id: existingUser.user_id,
        loggedIn: true,
        requester: existingUser.requester
      }
      res.send(req.session.user)
      console.log('login', req.session.user)
    } else res.status(401).send("Username or Password incorrect")
  },

  async signup(req, res) {
    let {username, password, email, phone, first_name, last_name, requester, doer} =req.body
    console.log('request', requester, doer)
    const db = req.app.get('db')
    let [existingUser] = await db.get_user(username)
    if(existingUser) return res.status(400).send('Username already exists')
    let salt = await bcrypt.genSalt(saltRounds)
    let hash = await bcrypt.hash(password, salt)
    let [user] = await db.create_user([username, hash, email, +phone, first_name, last_name, requester, doer])
    req.session.user = {
      username: user.username, 
      id: user.id, 
      loggedIn: true,
      requester: requester,
      doer: doer
    }
    res.send(req.session.user)
  },

  logout(req, res){
    req.session.destroy()
    res.sendStatus(200)
  },

  getUser(req, res){
    res.send(req.session.user)
  },
  async getAllUsers(req, res){
    const db = req.app.get('db')
    let data = await db.get_all_users()
    res.send(data)
  }
}
