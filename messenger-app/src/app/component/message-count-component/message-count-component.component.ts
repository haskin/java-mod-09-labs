import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-count-component',
  templateUrl: './message-count-component.component.html',
  styleUrls: ['./message-count-component.component.css'],
})
export class MessageCountComponentComponent implements OnInit {
  sentMessageCount?: number;

  constructor() {}

  ngOnInit(): void {}
}
