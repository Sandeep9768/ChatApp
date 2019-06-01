/**
 * Real Time chatting app
 * @author Shashank Tiwari
 */

'user strict'
const DB = require('./db')

class Helper {
  constructor () {
    this.db = DB
  }

  async userNameCheck () {
    try {
        return await this.db.query(
          'select * from message1'
        )
      } catch (error) {
        console.log(error)
        return null
      }
  }

  
}
module.exports = new Helper()
