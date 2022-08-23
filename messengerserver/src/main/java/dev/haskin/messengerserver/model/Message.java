package dev.haskin.messengerserver.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Message {
    private Sender sender;
    private String test;
    private Long conversationId;
    private Integer sequenceNumber;
}

// interface Message {
// sender: Sender,
// text: string,
// conversationId: number,
// sequenceNumber: number
// }

// interface Sender {
// firstName: string,
// isOnline?: boolean
// }