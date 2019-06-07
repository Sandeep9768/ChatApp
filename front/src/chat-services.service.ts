import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
// import { resolve } from 'path';
@Injectable({
  providedIn: 'root'
})
export class ChatServicesService {
  // private url = 'http://localhost:3000';
  private url = 'http://192.168.0.124:5000';

    private socket; 
  constructor(private http: HttpClient) {
    console.log('services');
    this.socket = io(this.url);
    console.log(this.socket);
    
   }
   postAllData(data,url){
     return new Promise(resolve=>{
       var base=this.url+""+url
       console.log('url',base);
       
        this.http.post(base,data)
  .subscribe(res=>{
        resolve(res)
     }),err=>{
console.log(err);

     }
    });
   }
   sendMessage(message){
     console.log('services');
     
     return new Promise(resolve=>{
      var data=this.socket.emit("new-message",message);
      // resolve(data)
     })
    //  console.log(message,'services');
    //  this.socket.emit("new-message",message);
    
   }
   
   public getMessages = () => {
    return Observable.create((observer) => {
        this.socket.on('message', (message) => {
          console.log(message);
          
            observer.next(message);
        });
    });
}
}
