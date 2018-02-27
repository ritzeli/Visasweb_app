import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../../services/services.index';

declare var $: any;

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  message: any ;
  formValue: any;
  ban: any;
  constructor(public chat_bot_service: ChatbotService) {
    this.chat_bot_service.read_messages().subscribe();
  }

  ngOnInit() {
  }

  sendMessage() {
    this.chat_bot_service.converse(this.formValue , '213123sdas');
    this.formValue = '';
  }


}
