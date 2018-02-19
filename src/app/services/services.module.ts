import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatbotService} from './services.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [ ChatbotService]
})
export class ServicesModule { }
