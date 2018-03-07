import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {ChatbotService,
        UserService,
        LoginGuard,
        ChatsmainService
} from './services.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers : [
    ChatbotService,
    UserService,
    LoginGuard,
    ChatsmainService
  ]
})
export class ServicesModule { }
