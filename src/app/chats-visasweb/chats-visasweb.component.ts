import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../services/services.index';
import {UserService} from '../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chats-visasweb',
  templateUrl: './chats-visasweb.component.html',
  styleUrls: ['./chats-visasweb.component.css']
})
export class ChatsVisaswebComponent implements OnInit {
  message: any ;
  formValue: any;
  ban: any;
  user_chat: any = {} ;
  RoomBot: any = [] ;
  RoomBot_id: any ;
  constructor(public chat_bot_service: ChatbotService,
              public user_service: UserService,
              public router: Router) { }

  ngOnInit() {
    this.user_service.user.subscribe( User => {
      this.user_chat = User;
      this.chat_bot_service.bot_started(this.user_chat.User_id)
        .subscribe(res => {
          this.RoomBot = res;
          this.RoomBot_id = this.RoomBot[0].RoomBot_id;
          this.chat_bot_service.read_messages(this.RoomBot_id).subscribe();
        });
    });
  }

  sendMessage() {
    this.chat_bot_service.converse(this.formValue , this.user_chat.User_id, this.RoomBot_id);
    this.formValue = '';
  }

}
