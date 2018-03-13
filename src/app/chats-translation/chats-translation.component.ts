import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ChatstranslationService} from '../services/services.index';

@Component({
  selector: 'app-chats-translation',
  templateUrl: './chats-translation.component.html',
  styleUrls: ['./chats-translation.component.css']
})
export class ChatsTranslationComponent implements OnInit {
  message: any ;
  formValue: any;
  ban: any;
  user_chat: any = {} ;
  User_chatT: any;
  User_lang: any;
  friend_lang: any;
  RoomT_id: any;
  constructor(public user_service: UserService,
              public router: Router,
              public activated_router: ActivatedRoute,
              public chat_translation_service: ChatstranslationService) { }

  ngOnInit() {
    this.user_service.user.subscribe( User => {
      this.user_chat = User;
      this.activated_router.params.subscribe(params => {
        // console.log(params['id_one']);
        // console.log(params['id_two']);
        // console.log(params['id_Room']);
        this.user_service.Read_one_user(params['id_two']).subscribe(ress => {
          this.RoomT_id = params['id_Room'];
          this.User_chatT = this.user_chat.User_id;
          this.User_lang = this.user_chat.lang;
          this.friend_lang = ress.lang;
          this.chat_translation_service.read_messagesT(this.RoomT_id).subscribe(res => {
              console.log(res);
            }
          );
        });
      });
    });
  }
  sendMessage() {
    // todo put validation
    this.chat_translation_service.converse_translation( this.formValue, this.User_chatT, this.RoomT_id , this.User_lang, this.friend_lang )
                       .then();
    console.log(this.formValue);
    this.formValue = '';
  }

}
