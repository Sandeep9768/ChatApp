class Socket{
    
    constructor(socket){
        // console.log('socket'+socket);
        this.io = socket;
       
    }
    socketEvent(){
        this.io.on('connection',(socket)=>{
            console.log('connected');
            
        })
        
    }
  
}
module.exports = Socket;