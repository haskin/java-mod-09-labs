import { EventEmitter, Injectable } from '@angular/core';
import Message from '../model/Message';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagingDataService {
  private senderMessages: Message[] = [];
  private userMessages: Message[] = [];

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-sender-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.httpClient
      .get<Message[]>('http://localhost:8080/api/get-user-messages')
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.userMessages = messages;
        this.userMessagesChanged.emit(this.userMessages);
      });
    return this.userMessages.slice();
  }

  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  constructor(private httpClient: HttpClient) {}
}
// export class MessagingDataService {
//   private senderMessages: Message[] = [
//     {
//       sender: { firstName: 'Ludovic', isOnline: true },
//       text: 'Message from Ludovic',
//       conversationId: 1,
//       sequenceNumber: 0,
//     },
//     {
//       sender: { firstName: 'Jessica' },
//       text: 'Message from Jessica',
//       conversationId: 1,
//       sequenceNumber: 1,
//     },
//   ];

//   private userMessages: Message[] = [
//     {
//       sender: { firstName: 'Aurelie' },
//       text: 'Message from Aurelie',
//       conversationId: 1,
//       sequenceNumber: 2,
//     },
//   ];

//   userMessagesChanged = new EventEmitter<Message[]>();
//   senderMessagesChanged = new EventEmitter<Message[]>();

//   getSenderMessages() {
//     return this.senderMessages.slice();
//   }

//   getUserMessages() {
//     return this.userMessages.slice();
//   }

//   addSenderMessage(newMessage: Message) {
//     this.senderMessages.push(newMessage);
//     this.senderMessagesChanged.emit(this.senderMessages.slice());
//   }

//   addUserMessage(newMessage: Message) {
//     this.userMessages.push(newMessage);
//     this.userMessagesChanged.emit(this.userMessages.slice());
//   }

//   constructor() {}
// }
