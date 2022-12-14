package dev.haskin.messengerserver.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@ToString
public class Message {
    private Sender sender;
    private String text;
    private Integer conversationId;
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