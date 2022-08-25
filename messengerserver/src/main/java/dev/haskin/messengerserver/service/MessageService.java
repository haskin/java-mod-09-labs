package dev.haskin.messengerserver.service;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import dev.haskin.messengerserver.model.Message;
import dev.haskin.messengerserver.model.Sender;

@Service
public class MessageService {
    private static final Sender LUDOVIC = Sender.builder().firstName("Ludovic").isOnline(true).build();
    private static final Sender JESSICA = Sender.builder().firstName("Jessica").isOnline(false).build();
    private static List<Message> userMessages = List
            .of(Message.builder().conversationId(1).sender(LUDOVIC).sequenceNumber(1).text("Goodbye, World").build(),
                    Message.builder().conversationId(2).sender(LUDOVIC).sequenceNumber(2).text("Goodbye, Space")
                            .build());
    private static List<Message> senderMessages = List.of(
            Message.builder().sender(JESSICA).conversationId(2).sequenceNumber(2).text("Hello, McDonalds").build());

    public List<Message> getUserMessages() {
        return userMessages;
    }

    public List<Message> getSenderMessages() {
        return senderMessages;
    }

    /**
     * Deletes the user message from the list of user messages
     * and returns the updated list
     * 
     * @param message
     * @return
     */
    public List<Message> deleteUserMessage(Message message) {
        userMessages = userMessages.stream()
                .filter(messages -> !messages.getConversationId().equals(message.getConversationId()))
                .collect(Collectors.toList());
        return userMessages;
    }
}
