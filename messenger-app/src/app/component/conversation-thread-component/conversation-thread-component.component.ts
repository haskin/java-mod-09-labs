import { Component, OnInit } from '@angular/core';
import Message from 'src/app/model/Message';
import { MessagingDataService } from 'src/app/service/messaging-data.service';

@Component({
  selector: 'app-conversation-thread-component',
  templateUrl: './conversation-thread-component.component.html',
  styleUrls: ['./conversation-thread-component.component.css'],
})
export class ConversationThreadComponentComponent implements OnInit {
  senderMessages?: Message[];
  userMessages?: Message[];

  constructor(private messagingService: MessagingDataService) {}

  ngOnInit(): void {
    this.senderMessages = this.messagingService.getSenderMessages();
    this.userMessages = this.messagingService.getUserMessages();
    this.messagingService.userMessagesChanged.subscribe(
      (messages: Message[]) => {
        console.log('********** messages have changed');
        this.userMessages = messages;
      }
    );
    this.messagingService.senderMessagesChanged.subscribe(
      (messages: Message[]) => {
        console.log('********** sender messages have changed');
        this.senderMessages = messages;
      }
    );
  }
  //   {
  //     sender: { firstName: "Ludovic", isOnline: true },
  //     text: "Message from Ludovic",
  //     conversationId: 1,
  //     sequenceNumber: 0,
  //   },
  //   {
  //     sender: { firstName: "Jessica" },
  //     text: "Message from Jessica",
  //     conversationId: 1,
  //     sequenceNumber: 1,
  //   },
  // ];

  // userMessages: Message[] = [
  //   {
  //     sender: { firstName: "Aurelie" },
  //     text: "Message from Aurelie",
  //     conversationId: 1,
  //     sequenceNumber: 2,
  //   },
  // ];
}
