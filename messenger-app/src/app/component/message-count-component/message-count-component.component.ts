import { Component, OnInit } from '@angular/core';
import { MessagingDataService } from 'src/app/service/messaging-data.service';

@Component({
  selector: 'app-message-count-component',
  templateUrl: './message-count-component.component.html',
  styleUrls: ['./message-count-component.component.css'],
})
export class MessageCountComponentComponent implements OnInit {
  sentMessageCount: number = 0;
  userMessageCount: number = 0;
  senderMessageCount: number = 0;

  constructor(private messageService: MessagingDataService) {}

  ngOnInit(): void {
    this.messageService.userMessagesChanged.subscribe((messages) => {
      this.sentMessageCount -= this.userMessageCount;
      this.sentMessageCount += messages.length;
    });

    this.messageService.senderMessagesChanged.subscribe((messages) => {
      this.sentMessageCount -= this.senderMessageCount;
      this.sentMessageCount += messages.length;
    });
  }
}
