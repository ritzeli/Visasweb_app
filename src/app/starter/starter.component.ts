import { Component, AfterViewInit } from '@angular/core';
import {ChatService} from '../services/chat.service';

@Component({
	templateUrl: './starter.component.html'
})
export class StarterComponent implements AfterViewInit {
  messages = [];
  subtitle: string;
  constructor(private chat: ChatService) {
    this.chat.loadchats().subscribe(res => {
      console.log(res);
      this.messages = res;
    });
	}

	ngAfterViewInit(){}
}
