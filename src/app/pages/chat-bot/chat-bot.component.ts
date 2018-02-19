import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../../services/services.index';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  constructor(public chatBot: ChatbotService) { }

  ngOnInit() {
  }

}
