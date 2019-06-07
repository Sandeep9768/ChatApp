import { Component, OnInit } from '@angular/core';
import {ChatServicesService} from '../../../chat-services.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rowdata={

  };
  userId=1;

  messages = [];
  constructor(public chat:ChatServicesService) {
    // this.chat;
    console.log(
      this.messages
    );
    
   }
   user(){
     console.log('user');
     var data={
       userId:1,
       toUserId:2
    
     };
     this.chat.postAllData(data,'/getMessages').then(res=>{
       console.log('res',res);
       var message=JSON.parse(JSON.stringify(res));
       this.messages=message.messages;
      //  this.messages.push(message1)
       console.log(this.messages,'alldata');
       
       
     })
   }

  ngOnInit() {
    this.chat
      .getMessages()
      .subscribe((message: string) => {
        console.log('res',this.messages);
        this.messages.push(message,'res');
        console.log('res',this.messages);
        
      });
  }
  send(rowdata){
    console.log('data',rowdata);
    var data={
      fromUserId: 2,
      toUserId: this.userId,
      message: rowdata.name
  }
  // console.log('data',data);
  // console.log('data',data);
    this.chat.sendMessage(data).then(res=>{
      console.log(res,'result');
      
    })
    
  }
alignMessage (fromUserId)  {
  console.log(fromUserId,'from');
  
    return fromUserId == this.userId ? true : false;
}
}
