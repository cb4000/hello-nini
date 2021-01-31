import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import * as Rx from 'rxjs/Rx';
import {io} from 'socket.io-client';

import { Message } from '../message/message.model';

// import { environment } from '../environments/environment';
// TODO: ideally this socket connection is configurable via env variables


@Injectable({
  providedIn: 'root'
})
export class ChatWebsocketService {


  // Our socket connection
  private socket: any;

  constructor() { }

  connect(): Rx.Subject<MessageEvent> {
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    const WS_URL:string = `http://localhost:3000`;
    this.socket = io(WS_URL);

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    const observable = new Observable(myObserver => {
        this.socket.on('message', (data: Message) => {
          console.log('Received message from Websocket Server');
          myObserver.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
    });

    // We define our Observer which will listen to messages
    // from our other components and send messages back to our
    // socket server whenever the `next()` method is called.
    const observer = {
        next: (data: Message) => {
            this.socket.emit('message', JSON.stringify(data));
        },
    };

    // we return our Rx.Subject which is a combination
    // of both an observer and observable.
    return Rx.Subject.create(observer, observable);
  }
}
