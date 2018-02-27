import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ChatbotService {
  tex: any = '' ;
  readonly ROOT_URL = 'https://us-central1-visasweb-57098.cloudfunctions.net/visasweb/chatbot'
  constructor(private http: HttpClient) {
    this.tex = 'Hola desde el servicio chat-bot funcionando desde el index';
  }
  test_conexion() {
    let params = new HttpParams();
    params = params.set('message', 'hola');
    params = params.set('User_id', '123456');
    return this.http.get(this.ROOT_URL, {params});
  }
}
