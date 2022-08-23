package dev.haskin.messengerserver.component;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/get-user-messages")
    List<Message> getUserMessage() {
        return messageService.getUserMessages();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/get-sender-messages")
    List<Message> getSenderMessage() {
        return messageService.getSenderMessages();
    }
}
