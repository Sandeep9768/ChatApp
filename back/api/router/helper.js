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

  async insertMessages(data){
    console.log(data,'params');
    
		try {
			return await this.db.query(
				"INSERT INTO message (`from_user_id`,`to_user_id`,`message`) values (?,?,?)",
				[data.fromUserId, data.toUserId, data.message]
			);
		} catch (error) {
			console.warn(error);
			return null;
		}		
	}

  async getMessages(userId, toUserId){
    console.log(userId,toUserId);
    
		try {
			return await this.db.query(
				`SELECT id,from_user_id as fromUserId,to_user_id as toUserId,message FROM message WHERE 
					(from_user_id = ? AND to_user_id = ? )
					OR
					(from_user_id = ? AND to_user_id = ? )	ORDER BY id ASC				
				`,
				[userId, toUserId, toUserId, userId]
			);
		} catch (error) {
			console.warn(error);
			return null;
		}
	}

  
}
module.exports = new Helper()
