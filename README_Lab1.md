# Lab 1

## Instructions

Using the same pattern we used to apply conditional formatting to the sender's
avatar, apply conditional formatting to the sender's actual message, so that
messages from a user who's currently online are bolded and messages from a user
who is currently offline are using a lighter font weight.

Hints:

- Font weights can be controlled using the following Bootstrap classes:
  `fw-bold` and `fw-light`
- There are several other values you could use, but those 2 are sufficient to
  support our use case

Your application display should look like this:

![Font Weights](https://curriculum-content.s3.amazonaws.com/java-mod-8/ng-messaging-font-weights.png)

Here is our sender message component after this change:

```html
<div class="container">
  <div class="row">
    <div class="col-1 p-3">
      <span
        class="badge"
        [ngClass]="message.sender.isOnline ? 'bg-primary' : 'bg-secondary'"
      >
        {{message.sender.firstName[0]}}</span
      >
    </div>
    <div class="col-8 p-3 border rounded-5">
      <span [ngClass]="message.sender.isOnline ? 'fw-bold' : 'fw-light'">
        {{message.text}}</span
      >
    </div>
  </div>
</div>
```
