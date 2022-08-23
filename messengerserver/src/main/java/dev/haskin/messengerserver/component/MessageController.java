package dev.haskin.messengerserver.component;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.haskin.messengerserver.model.Message;
import dev.haskin.messengerserver.service.MessageService;

@RestController
@RequestMapping("/api")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping(value = "/get-user-message")
    List<Message> getUserMessage() {
        return messageService.getUserMessages();
    }

    @GetMapping(value = "/get-sender-message")
    List<Message> getSenderMessage() {
        return messageService.getSenderMessages();
    }
}
