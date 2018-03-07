import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from '@angular/router';

@Injectable()
export class ChatsmainService {
  RoomG: any;
  RoomG_id: any;
  chat_message: any;
  constructor(private afs: AngularFirestore,
              private router: Router ) { }
 public read_messagesG (RoomG_id: any) {
   const message_read: AngularFirestoreCollection<any> = this.afs
     .collection('RoomsG/' + RoomG_id + '/MessagesG', ref =>
       ref.orderBy( 'date', 'desc').limit(20));
   return message_read.valueChanges().map((message) => {
     console.log(message);
     this.chat_message = [];
     for (let message_one of message ){
       this.chat_message.unshift(message_one);
     }
     return this.chat_message;
   });
 }
// converse
public converse_general (msg: string , Chat_User_id: any, RoomG_id: any) {
  const chat_ref: AngularFirestoreCollection<any> = this.afs.collection('RoomsG/' + RoomG_id + '/MessagesG');
  const MessageG_id = this.afs.createId();
  const data = {
    MessageG_id: MessageG_id,
    message: msg,
    Chat_User_id: Chat_User_id,
    date : new Date().getTime()
  };
   return chat_ref.doc(MessageG_id).set(data);
}
// started chat users
  public  ChatG_started (one_id: any , two_id: any) {
    this.afs
      .collection('RoomsG', ref => ref
        .where('Client_id', '==', one_id)
        .where('Supplier_id', '==', two_id))
      .valueChanges().subscribe(res => {
      if ( !(res.length === 0)) {
         console.log(res);
          this.RoomG = res;
          this.RoomG_id = this.RoomG[0].RoomG_id;
         console.log(this.RoomG[0]);
         this.router.navigate(['/main-chat/' , one_id , two_id , this.RoomG_id]).then();
         return ;
      }else {
        this.started_reverse(one_id, two_id);
      }
      });
  }
  // second validation of started chat
  public  started_reverse(one_id , two_id){
    this.afs
      .collection('RoomsG', ref => ref
        .where('Client_id', '==', two_id)
        .where('Supplier_id', '==', one_id))
      .valueChanges().subscribe(res => {
      if ( !(res.length === 0)) {
        this.RoomG = res;
        this.RoomG_id = this.RoomG[0].RoomG_id;
        this.router.navigate(['/main-chat' , one_id , two_id , this.RoomG_id]).then();
        return;
      } else {
        this.create_Room_G( one_id, two_id);
        return;
      }
    });
  }
  //  create Room General
  public create_Room_G (Client_id: any , Supplier_id: any) {
    const RoomG_id = this.afs.createId();
    const data = {
      RoomG_id: RoomG_id,
      Client_id: Client_id,
      Supplier_id : Supplier_id,
      date : new Date().getTime()
    };
    this.afs.collection('RoomsG')
      .doc(RoomG_id).set(data).then( () => {
        this.router.navigate(['/main-chat/' , Client_id , Supplier_id , RoomG_id]).then();
      });
  }
}
