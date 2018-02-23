import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/services.index';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css']
})
export class RestoreComponent implements OnInit {
response: any = {};
  modee: any;
  oobCode: any;
  apiKey: any;
  login_password: FormGroup;
  constructor(private user_service: UserService) {
    this.login_password  = new  FormGroup({
      user_password : new FormControl(null, Validators.required),
      user_password2 : new FormControl(null, Validators.required)
    }, {validators: this.the_same('user_password', 'user_password2')});
  }
  ngOnInit() {
    const url = window.location.href;
    console.log(url);
    const separator = '?';
    const separator2 = '&';
    const separator3 = '=';
    const url2 = url.split(separator);
    const url3 = url2[1];
    const url4 =  url3.split(separator2);
    const url_mode = url4[0];
    const url_oobCode = url4[1];
    const url_apiKey =  url4[2];
    this.modee =  url_mode.split(separator3)[1];
    this.oobCode =  url_oobCode.split(separator3)[1];
    this.apiKey = url_apiKey.split(separator3)[1];
    this.response = {
      mode: this.modee,
      oobCode: this.oobCode,
      apiKey: this.apiKey
    }
    console.log(this.response);
  }

  the_same(term1: string , term2: string) {
    return ( group: FormGroup) => {
      const pass1 = group.controls[term1].value;
      const pass2 = group.controls[term2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {sonigules: true};
    };
  }
  restore_password() {
    if (this.login_password.invalid) {
      return;
    }
    const reset = this.login_password.value.user_password;
    console.log(reset);
    this.user_service.account_chage_password(this.oobCode , reset);
  }
}
