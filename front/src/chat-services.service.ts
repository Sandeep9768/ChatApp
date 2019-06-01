import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatServicesService {
  private url = 'http://localhost:3000';
    private socket; 
  constructor(private http: HttpClient) {
    console.log('services');
    this.socket = io(this.url);
    console.log(this.socket);
    
   }
}
