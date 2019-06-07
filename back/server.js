/**
* Real Time chatting app
* @author Shashank Tiwari
*/
'use strict';

const express = require("express");
var http = require('http')
const bodyParser = require('body-parser');
var cors = require('cors')
const routes = require('./api/router/router'); 
const socket = require('./api/router/socket'); 
const socketio = require('socket.io');

function getData(){

}

class Server{
    

    constructor(){
        this.port =  process.env.PORT || 3000;
        // this.host = `localhost`;
        
        this.app = express();
        this.http = http.Server(this.app);
        this.socket = socketio(this.http);
    }
    appConfig(){        
        this.app.use(
            bodyParser.json()
        );
        this.app.use(cors())
        // new config(this.app);
    }
    includeRoutes(){
         new routes(this.app).routesConfig();
         new socket(this.socket).socketEvent();
        console.log('app');
        
    }
    appExecute(){

        this.appConfig();
        this.includeRoutes();

        this.http.listen(this.port, () => {
            console.log(`Listening on `+this.port);
        });
    }

   
}

const app = new Server();
app.appExecute();