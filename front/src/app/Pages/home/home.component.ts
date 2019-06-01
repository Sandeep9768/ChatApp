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
  constructor(public chat:ChatServicesService) {
    this.chat;
   }

  ngOnInit() {
  }
  send(data){
    console.log(data);
    
  }

}
