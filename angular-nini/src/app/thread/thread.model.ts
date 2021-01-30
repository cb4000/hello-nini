import { Message } from '../message/message.model';
import { uuid } from '../util/uuid';

/**
 * Thread represents a group of Users exchanging Messages
 */
export class Thread {
   id: string;
   // tslint:disable-next-line:variable-name
  private _lastMessage!: Message;
  public get lastMessage(): Message {
    return this._lastMessage;
  }
  public set lastMessage(value: Message) {
    this._lastMessage = value;
  }
   name: string;
   avatarSrc: string;

   constructor(id?: string,
               name?: string,
               avatarSrc?: string) {
     this.id = id || uuid();
     this.name = name || '';
     this.avatarSrc = avatarSrc || '';
   }
 }
