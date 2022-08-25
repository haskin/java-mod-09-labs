package dev.haskin.messengerserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.haskin.messengerserver.model.Message;
import dev.haskin.messengerserver.service.MessageService;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api")
@Slf4j
public class MessageController {
    @Autowired
    private MessageService messageService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/get-user-messages")
    public List<Message> getUserMessage() {
        return messageService.getUserMessages();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/get-sender-messages")
    public List<Message> getSenderMessage() {
        return messageService.getSenderMessages();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(value = "/delete-user-message")
    public List<Message> deleteMessage(@RequestBody Message message) {
        log.info("in delete message");
        return messageService.deleteUserMessage(message);
    }
}
