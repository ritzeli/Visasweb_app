import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatbotService,
        UserService
} from './services.index';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    ChatbotService,
    UserService
  ]
})
export class ServicesModule { }
