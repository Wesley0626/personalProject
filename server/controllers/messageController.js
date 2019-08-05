module.exports = {
  async createRoom(req, res){
    console.log('createroom')
    let greaterUser = 0
    let lesserUser = 0
    let {user1, user2} = req.query
    if(user1 > user2){
      greaterUser = user1
      lesserUser = user2
    } else{
      greaterUser = user2
      lesserUser = user1
    }
    let roomId = `${greaterUser}:${lesserUser}`
    const db = req.app.get('db')
    let data = await db.create_room(roomId)
    res.send(data)
  },
  async saveMessage(req, res){
    let {content, roomId} = req.body
    const db = req.app.get('db')
    let data = await db.save_message([content, roomId, req.session.user.id, ])
    res.send(data)
  },
  async getMessages(req, res){
    // let {roomID} = req.params
    const db = req.app.get('db')
    let data = await db.get_messages()
    res.send(data)
  },
  async getRooms(req, res){
    console.log("hitGetRooms")
    const db = req.app.get('db')
    let data = await db.get_rooms()
    res.send(data)
  },
  async getUniqueRooms(req, res){
    const db = req.app.get('db')
    let {user_id} = req.params
    let firstParam = `${user_id}:%`
    let secondParam = `%:${user_id}`
    let data = await db.get_unique_rooms([firstParam, secondParam])
    res.send(data)
  }
}