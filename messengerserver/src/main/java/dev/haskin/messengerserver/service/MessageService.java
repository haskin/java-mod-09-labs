package dev.haskin.messengerserver.service;

import java.util.List;

import org.springframework.stereotype.Service;

import dev.haskin.messengerserver.model.Message;
import dev.haskin.messengerserver.model.Sender;

@Service
public class MessageService {
    private static final Sender LUDOVIC = Sender.builder().firstName("Ludovic").isOnline(true).build();
    private static final Sender JESSICA = Sender.builder().firstName("Jessica").isOnline(false).build();
    private static List<Message> userMessages = List
            .of(Message.builder().conversationId(1).sender(LUDOVIC).sequenceNumber(1).text("Goodbye, World").build());
    private static List<Message> senderMessages = List.of(
            Message.builder().sender(JESSICA).conversationId(2).sequenceNumber(2).text("Hello, McDonalds").build());

    public List<Message> getUserMessages() {
        return userMessages;
    }

    public List<Message> getSenderMessages() {
        return senderMessages;
    }
}
