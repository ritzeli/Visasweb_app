import { Injectable } from '@angular/core';
import {ApiAiClient} from "api-ai-javascript";
import {environment} from '../../../environments/environment';


@Injectable()
export class ChatbotService {
  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token }).textRequest('Hola!')
    .then((response) => {console.log(response)})
    .catch((error) => {/* do something here too */});
  tex: any = '' ;
  constructor() {
    this.tex = 'Hola desde el servicio chat-bot funcionando desde el index';
  }
}
