import { Injectable, EventEmitter } from '@angular/core';
import Message from '../model/Message';

@Injectable()
export class MessagingDataService {
  private senderMessages: Message[] = [
    {
      sender: { firstName: 'Ludovic', isOnline: true },
      text: 'Message from Ludovic',
      conversationId: 1,
      sequenceNumber: 0,
    },
    {
      sender: { firstName: 'Jessica' },
      text: 'Message from Jessica',
      conversationId: 1,
      sequenceNumber: 1,
    },
  ];

  private userMessages: Message[] = [
    {
      sender: { firstName: 'Aurelie' },
      text: 'Message from Aurelie',
      conversationId: 1,
      sequenceNumber: 2,
    },
  ];

  userMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    return this.senderMessages.slice();
  }

  getUserMessages() {
    return this.userMessages.slice();
  }

  addUserMessage(newMessage: Message) {
    this.userMessages.push(newMessage);
    this.userMessagesChanged.emit(this.userMessages.slice());
  }

  constructor() {}
}
