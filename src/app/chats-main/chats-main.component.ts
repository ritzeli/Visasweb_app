import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../services/services.index';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
@Component({
  selector: 'app-chats-main',
  templateUrl: './chats-main.component.html',
  styleUrls: ['./chats-main.component.css']
})
export class ChatsMainComponent implements OnInit {
  message: any ;
  formValue: any;
  ban: any;
  user_chat: any = {} ;
  RoomBot: any = [] ;
  RoomBot_id: any ;
  constructor(public chat_bot_service: ChatbotService,
              public user_service: UserService,
              public router: Router,
              public activatedrouter: ActivatedRoute) {
    this.activatedrouter.params.subscribe(params => {
      console.log(params['id_one']);
      console.log(params['id_two']);
      console.log(params['id_Room']);
    });
  }

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
