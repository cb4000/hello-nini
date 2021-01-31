import { Injectable } from '@angular/core';
import { ChatWebsocketService } from './chat-websocket.service';
import { Observable, Subject } from 'rxjs/Rx';
import { Message } from '../message/message.model';

@Injectable({
  providedIn: 'root'
})
export class LiveChatService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: ChatWebsocketService) {
    this.messages = (wsService
      .connect()
      .map((response: any): any => {
        return JSON.parse(response);
      }) as Subject<any>);
   }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg: Message): void {
    this.messages.next(msg);
  }
}
