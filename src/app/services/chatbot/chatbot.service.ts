import { Injectable } from '@angular/core';

@Injectable()
export class ChatbotService {
  tex: any = '' ;
  constructor() {
    this.tex = 'Hola desde el servicio chat-bot funcionando desde el index';
  }
}
