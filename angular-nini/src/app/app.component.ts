import { Component, Inject, OnInit } from '@angular/core';
import { ChatExampleData } from './data/chat-example-data';

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';
import { Message } from './message/message.model';
import { LiveChatService } from './chat-websocket/live-chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    constructor(
              public messagesService: MessagesService,
              public threadsService: ThreadsService,
              public usersService: UsersService,
              private chat: LiveChatService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }

  ngOnInit(): void {
    this.chat.messages.subscribe((msg: Message) => {
      this.messagesService.recieveMessage(msg);
    });
  }
}
