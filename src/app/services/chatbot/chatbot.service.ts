import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
// Message class for displaying messages in the component
export class Message {
  constructor(public content: string, public sentBy: string) {}
}
@Injectable()
export class ChatbotService {
  chat_message = [];
  tex_bot: any  ;
  result_bot: any;
  readonly ROOT_URL = 'https://us-central1-visasweb-57098.cloudfunctions.net/visasweb/chatbot'
  constructor(private http: HttpClient, private afs: AngularFirestore) { }
  converse(msg: string , User_id: any) {
    let params = new HttpParams();
    // class for message
    const user_message = new Message(msg, 'user');
    this.update_message(user_message);
    params = params.set('message',  msg);
    params = params.set('User_id', User_id);
    return this.http.get(this.ROOT_URL, {params})
         .subscribe(res => {
           this.result_bot = res;
           this.tex_bot = this.result_bot.message_test.result.fulfillment.speech;
           console.log(this.tex_bot);
           const botMessage = new Message(this.tex_bot, 'bot');
           this.update_message(botMessage);
         });
  }
  // Adds message to source
  update_message(msg: Message) {
    const MessageBot_id = this.afs.createId();
    const data = {
      message: msg.content,
      sendBay: msg.sentBy,
      date : new Date().getTime()
    };
    console.log(msg.content);
    const messagebotRef = this.afs.collection('RoomsBot/qqPsjijDdyH4fFX41RBJ/MessageBot')
      .doc(MessageBot_id).set(data);
  }

  // read messages
  read_messages() {
    const message_read: AngularFirestoreCollection<any> = this.afs
      .collection('RoomsBot/qqPsjijDdyH4fFX41RBJ/MessageBot', ref =>
        ref.orderBy( 'date', 'desc').limit(10));
    return message_read.valueChanges().map((message) => {
        this.chat_message = [];
        for (let message_one of message ){
          this.chat_message.unshift(message_one);
        }
        return this.chat_message;
      }
    );
  }
}
