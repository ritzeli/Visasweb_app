import {Component, group, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../services/services.index';
import * as swal from 'sweetalert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  forma: FormGroup;
  constructor(private user_services: UserService , private router: Router) { }

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

  ngOnInit() {
    this.forma = new FormGroup({
      name: new FormControl(null , Validators.required ),
      email: new FormControl(null , Validators.email),
      password: new FormControl( null , Validators.required),
      password2: new FormControl(null , Validators.required),
      terms : new FormControl(false),
    }, {validators: this.the_same('password', 'password2')});
  }

  sing_up() {
    if ( this.forma.invalid) {
      return;
    }
    if (this.forma.value.terms === false ) {
      swal('Recuerda!', 'Debes aceptar los terminos  y condiciones', 'warning').then();
      return;
    }
    console.log(this.forma.value);
    const name = this.forma.value.name;
    const email =  this.forma.value.email;
    const password = this.forma.value.password;
    this.user_services.email_create_user(email, password, name ).then(() => {
        this.router.navigate(['/login']).then(() => {
          swal('Bienvendio! VisasWeb.com', 'Tú registro fue exitoso ingresa a la plataforma con tu Usuario y contraseña', 'success').then();
        });
    });
  }
}
