import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../../services/services.index';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  message: any ;
  constructor(public chatBot: ChatbotService) { }

  ngOnInit() {
  }
  send() {
    this.chatBot.test_conexion().subscribe(res => {
      this.message = res;
      console.log(this.message.message_test);
    });
  }

}
