import { Component, Input, OnInit } from '@angular/core';
import Message from 'src/app/model/Message';

@Component({
  selector: 'app-sender-message-component',
  templateUrl: './sender-message-component.component.html',
  styleUrls: ['./sender-message-component.component.css']
})
export class SenderMessageComponentComponent implements OnInit {
  @Input()
  message: Message = {
    sender: { firstName: "Ludovic", isOnline: false },
    text: "Message from Ludovic",
    conversationId: 1,
    sequenceNumber: 0,
  };

  getCurrentStyles() {
    let currentStyles = {
      'background-color': this.message.sender.isOnline ? 'blue' : 'red',
    };
    return currentStyles;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
