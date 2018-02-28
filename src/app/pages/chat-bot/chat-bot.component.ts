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
  RoomBot: any = [] ;
  RoomBot_id: any ;
  constructor(public chat_bot_service: ChatbotService, public user_service: UserService) { }

  ngOnInit() {
    this.user_service.user.subscribe( User => {
      this.user_chat = User;
      console.log(this.user_chat.User_id);
      this.chat_bot_service.bot_started(this.user_chat.User_id)
        .subscribe(res => {
          this.RoomBot = res;
          this.RoomBot_id = this.RoomBot[0].RoomBot_id;
          console.log(this.RoomBot_id);
          this.chat_bot_service.read_messages(this.RoomBot_id).subscribe();
        });
    });
  }

  sendMessage() {
      this.chat_bot_service.converse(this.formValue , this.user_chat.User_id, this.RoomBot_id);
      this.formValue = '';
  }
}
