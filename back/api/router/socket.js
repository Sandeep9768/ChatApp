const helper=require('./helper');
class Socket{
    
    constructor(socket){
        // console.log('socket'+socket);
        this.io = socket;
       
    }
    socketEvent(){
        this.io.on('connection', (socket)=>{
            console.log('connected');
            socket.on('new-message',async (message) => {
                console.log('message',message);
                // let toSocketId = data.toSocketId;
                var params={
                    fromUserId: message.fromUserId,
                    toUserId: message.toUserId,
                    message: message.message
                }
                const sqlResult = await helper.insertMessages(params);
                console.log(sqlResult);
                
                if(sqlResult==null){
                    console.log(message,'not');
                    
                    this.io.emit(message); 
                }
                else{
                    // console.log(sqlResult,'jhdjf');
                
                    this.io.emit('message',message); 
                }
                
             
              }
              );

              
        })
        
        // this.socket.on('sms',(message)=>{
        //     console.log('socket sms');
            
        // })
        
    }
  
}
module.exports = Socket;