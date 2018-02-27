import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../../services/services.index';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  message: any ;
  formValue: any;
  ban: any;
  user_chat: any = {} ;
  constructor(public chat_bot_service: ChatbotService, public user_service: UserService) {

    this.chat_bot_service.read_messages().subscribe();
  }

  ngOnInit() {
    this.user_service.user.subscribe( User => {
      this.user_chat = User;
      console.log(this.user_chat.User_id);
    });
  }

  sendMessage() {
    this.chat_bot_service.converse(this.formValue , this.user_chat.User_id);
    this.formValue = '';
  }


}
