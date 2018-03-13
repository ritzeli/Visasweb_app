import { Component, OnInit } from '@angular/core';
import {ChatbotService} from '../services/services.index';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
import {ChatsmainService} from '../services/services.index';

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
  User_chatG: any;
  RoomBot_id: any ;
  RoomG_id: any;
  constructor(public chat_bot_service: ChatbotService,
              public user_service: UserService,
              public router: Router,
              public activated_router: ActivatedRoute,
              public chat_main_service: ChatsmainService) {
    this.activated_router.params.subscribe(params => {
      console.log(params['id_one']);
      console.log(params['id_two']);
      console.log(params['id_Room']);
    });
  }

  ngOnInit() {
    this.user_service.user.subscribe( User => {
      this.user_chat = User;
      this.activated_router.params.subscribe(params => {
        // console.log(params['id_one']);
        // console.log(params['id_two']);
        // console.log(params['id_Room']);
        this.RoomG_id = params['id_Room'];
        this.User_chatG = this.user_chat.User_id;
        this.chat_main_service.read_messagesG(this.RoomG_id).subscribe(res => {
            console.log(res);
          }
        );
      });
    });
  }

  sendMessage() {
    // todo put validation
    this.chat_main_service.converse_general( this.formValue, this.User_chatG, this.RoomG_id )
      .then();
    this.formValue = '';
  }

}
