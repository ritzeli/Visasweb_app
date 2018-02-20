import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {UserService} from '../services/services.index';
// Alert
import * as swal from 'sweetalert';

declare var $ ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit {
  login_form: FormGroup;
  constructor(public router: Router,
              private user_services: UserService) { }

  ngOnInit() {
    this.login_form = new FormGroup({
       user_name: new FormControl(null, Validators.required),
       password: new FormControl(null, Validators.required)
    });
  }
  ngAfterViewInit() {
    $(function() {
      $('.preloader').fadeOut();
    });
    $(function() {
      (<any>$('[data-toggle="tooltip"]')).tooltip();
    });
    $('#to-recover').on('click', function() {
      $('#loginform').slideUp();
      $('#recoverform').fadeIn();
    });
  }
// todo  error with jquery
  login_up() {
    console.log(this.login_form.value);
    const email = this.login_form.value.user_name;
    const password =  this.login_form.value.password;
    this.user_services.email_sign_up(email , password).then();
  }
}
