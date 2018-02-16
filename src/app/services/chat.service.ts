import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable()
export class ChatService {

  constructor(private afs: AngularFirestore) { }

  loadchats(){
     return this.afs.collection('RoomsBot')
                     .doc('qqPsjijDdyH4fFX41RBJ')
                      .collection('MessageBot').valueChanges();
  }
}
