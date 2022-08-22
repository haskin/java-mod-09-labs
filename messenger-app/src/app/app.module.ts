import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversationHistoryComponentComponent } from './component/conversation-history-component/conversation-history-component.component';
import { ConversationThreadComponentComponent } from './component/conversation-thread-component/conversation-thread-component.component';
import { ContactListComponentComponent } from './component/contact-list-component/contact-list-component.component';
import { ConversationControlComponentComponent } from './component/conversation-control-component/conversation-control-component.component';
import { SendMessageComponentComponent } from './component/send-message-component/send-message-component.component';
import { SenderMessageComponentComponent } from './component/sender-message-component/sender-message-component.component';
import { UserMessageComponentComponent } from './component/user-message-component/user-message-component.component';
import { ContactComponentComponent } from './component/contact-component/contact-component.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationHistoryComponentComponent,
    ConversationThreadComponentComponent,
    ContactListComponentComponent,
    ConversationControlComponentComponent,
    SendMessageComponentComponent,
    SenderMessageComponentComponent,
    UserMessageComponentComponent,
    ContactComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
