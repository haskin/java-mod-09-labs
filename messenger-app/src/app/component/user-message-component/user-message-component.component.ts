import { Component, Input, OnInit } from '@angular/core';
import Message from 'src/app/model/Message';
import { MessagingDataService } from 'src/app/service/messaging-data.service';

@Component({
  selector: 'app-user-message-component',
  templateUrl: './user-message-component.component.html',
  styleUrls: ['./user-message-component.component.css'],
})
export class UserMessageComponentComponent implements OnInit {
  @Input()
  message: Message = {
    sender: { firstName: 'Ludovic', isOnline: false },
    text: 'Message from Ludovic',
    conversationId: 1,
    sequenceNumber: 0,
  };
  constructor(private messagingDataService: MessagingDataService) {}

  ngOnInit(): void {}

  deleteMessage() {
    // console.log(this.message);
    this.messagingDataService.deleteUserMessage(this.message);
  }
}
