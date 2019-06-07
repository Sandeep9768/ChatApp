
const helper=require('./helper');
// var app = express();
class Routes{
    constructor(app){
        console.log('router');
        this.app = app;
    }
    routesConfig(){
        console.log('router');
        // this.app.post('/getMessages',async (request,response) =>{
        //     response.send('data')
        // })

        this.app.post('/getMessages',async  ( request,response) =>{
            console.log('res',request.body);
            const messages = {}	
            const result=await helper.getMessages(request.body.userId,request.body.toUserId)
            console.log('result',result);
            
            // response.status(200).json('messages',result);
            if (result ===  null) {
                console.log('result');
                
                messages.error = true;
                messages.message = `Internal Server error.`;
                response.status(500).json(messages);
            }else{
                console.log('err');
                messages.error = false;
                messages.messages = result;
                response.status(200).json(messages);
            }
		});	
    }
}
module.exports = Routes;