import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatbotService,
        UserService,
        LoginGuard
} from './services.index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    ChatbotService,
    UserService,
    LoginGuard
  ]
})
export class ServicesModule { }
