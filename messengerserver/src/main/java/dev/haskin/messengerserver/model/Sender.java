package dev.haskin.messengerserver.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class Sender {
    private String firstName;
    private Boolean isOnline;
}

// interface Sender {
// firstName: string,
// isOnline?: boolean
// }