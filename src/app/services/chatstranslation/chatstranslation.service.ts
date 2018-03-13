import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Router} from '@angular/router';

@Injectable()
export class ChatstranslationService {
  RoomT: any;
  RoomT_id: any;
  chat_message: any;
  constructor(private afs: AngularFirestore,
              private router: Router) { }
              // red message
  public read_messagesT (RoomT_id: any) {
    const message_read: AngularFirestoreCollection<any> = this.afs
      .collection('RoomsT/' + RoomT_id + '/MessagesT', ref =>
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
  public converse_translation (msg: string , Chat_User_id: any, RoomT_id: any, in_lang: any, out_lang: any) {
    const chat_ref: AngularFirestoreCollection<any> = this.afs.collection('RoomsT/' + RoomT_id + '/MessagesT');
    const MessageT_id = this.afs.createId();
    const data = {
      MessageT_id: MessageT_id,
      message: msg,
      send_message: '...',
      in_lang: in_lang,
      out_lang: out_lang,
      Chat_User_id: Chat_User_id,
      date : new Date().getTime()
    };
    return chat_ref.doc(MessageT_id).set(data);
  }
  // chatT
  public  ChatT_started (one_id: any , two_id: any) {
    this.afs
      .collection('RoomsT', ref => ref
        .where('Client_id', '==', one_id)
        .where('Supplier_id', '==', two_id))
      .valueChanges().subscribe(res => {
      if ( !(res.length === 0)) {
        console.log(res);
        this.RoomT = res;
        this.RoomT_id = this.RoomT[0].RoomT_id;
        console.log(this.RoomT[0]);
        this.router.navigate(['/main-translation/' , one_id , two_id , this.RoomT_id]).then();
        return ;
      }else {
        this.started_reverse(one_id, two_id);
      }
    });
  }
  // second validation of started chat
  public  started_reverse(one_id , two_id){
    this.afs
      .collection('RoomsT', ref => ref
        .where('Client_id', '==', two_id)
        .where('Supplier_id', '==', one_id))
      .valueChanges().subscribe(res => {
      if ( !(res.length === 0)) {
        this.RoomT = res;
        this.RoomT_id = this.RoomT[0].RoomT_id;
        this.router.navigate(['/main-translation/' , one_id , two_id , this.RoomT_id]).then();
        return;
      } else {
        this.create_Room_T( one_id, two_id);
        return;
      }
    });
  }
  //  create Room General
  public create_Room_T(Client_id: any , Supplier_id: any) {
    const RoomT_id = this.afs.createId();
    const data = {
      RoomT_id: RoomT_id,
      Client_id: Client_id,
      Supplier_id : Supplier_id,
      date : new Date().getTime()
    };
    this.afs.collection('RoomsT')
      .doc(RoomT_id).set(data).then( () => {
      this.router.navigate(['/main-translation/' , Client_id , Supplier_id , RoomT_id]).then();
    });
  }
}
