import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import * as firebase from "firebase/app";
import {AngularFireAuth} from "angularfire2/auth";
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import * as swal from 'sweetalert';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMap';
interface Roles {
  reader: boolean;
  author?: boolean;
  admin?: boolean;
}

interface User {
  User_id: string;
  email?: string;
  img?: string;
  name?: string;
  date_created?: any;
  last_date?: any;
  key_view?: any;
  role?: Roles;
}
@Injectable()
export class UserService {
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
    // all User is in this function
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>('Users' + user.uid).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }
  // sign_up with email and password providers google.
  public email_create_user(email: string , password: string , name: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
          console.log(user);
          this.afs.collection('Users', ref => ref
            .where('User_id', '==', user.uid))
            .valueChanges()
            .subscribe(res => {
                console.log(res);
                if ( !(res.length === 0)) {
                  // alert('Update');
                  return this.Up_data_user_email(user).then();
                }else {
                  // alert('is create');
                  return this.New_user_data_email(user, name).then();
                }
              }
            );
        }
      ).catch( error => { console.log(error); });
  }
  public email_sign_up(email: string , password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
          console.log(user);
          this.afs.collection('Users', ref => ref
            .where('User_id', '==', user.uid))
            .valueChanges()
            .subscribe(res => {
                console.log(res);
                if ( !(res.length === 0)) {
                  console.log('pats the register');
                  this.router.navigate(['/dashboard']).then();
                  return this.Up_data_user_email(user).then();
                }
              }
            );
        }
      ).catch( error => {
        swal('Intentalo de nuevo !' ,'El usuario o la contraseña no son validas', 'error').then();
        console.log(error);
      });
  }
  // for email
  private  New_user_data_email(user, name: string) {
    const userRef1: AngularFirestoreDocument<any> = this.afs.doc( 'Users/' + user.uid);
    const data: User = {
      User_id: user.uid,
      email: user.email,
      img: user.photoURL,
      name: name,
      date_created: user.metadata.a,
      key_view: ['visasweb'],
      role: { reader: true}
    };
    return userRef1.set(data);
  }
  private Up_data_user_email(user) {
    const userRef2: AngularFirestoreDocument<any> = this.afs.doc('Users/' + user.uid);
    const data: User = {
      User_id: user.uid,
      last_date: user.metadata.b
    };
    return userRef2.update(data);
  }
  // logout General
  public logout_visasweb() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']).then();
    });
  }

  // account recovery
  public account_recovery(email) {
    this.afAuth.auth.sendPasswordResetEmail(email).then(() => {
      swal('El email fue enviado a:' , email , 'success').then();
    }).catch(() =>{
      swal('Intentalo de nuevo !' ,'El correo no exite', 'error').then();
    });
  }

}
