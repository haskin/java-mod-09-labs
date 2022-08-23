# Lab 3

## Instructions

Implement the same changes we just made for `userMessages` for our
`senderMessages`. A few things to remember:

1. The pattern is the same, so there shouldn't be anything you need that we
   haven't already done together
2. Even though we added the Event Emitter for user messages in a previous
   section, we did not add it for sender messages, so make sure that you make
   that change as well. Refer to the previous section to refresh your memory.

Here is the complete `messaging-data.service.ts`:

```typescript
import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";
import { Message } from "./message.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MessagingDataService {
  private senderMessages: Message[] = [];
  private userMessages: Message[] = [];

  userMessagesChanged = new EventEmitter<Message[]>();
  senderMessagesChanged = new EventEmitter<Message[]>();

  getSenderMessages() {
    this.httpClient
      .get<Message[]>("http://localhost:8080/api/get-sender-messages")
      .subscribe((messages: Message[]) => {
        console.log(messages);
        this.senderMessages = messages;
        this.senderMessagesChanged.emit(this.senderMessages);
      });
    return this.senderMessages.slice();
  }

  getUserMessages() {
    this.httpClient
      .get<Message[]>("http://localhost:8080/api/get-user-messages")
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

  constructor(
    private loggingSvce: LoggingService,
    private httpClient: HttpClient
  ) {
    loggingSvce.log("Messaging Data Service constructor completed");
  }
}
```
