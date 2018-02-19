import {Component, group, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as swal from 'sweetalert';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  forma: FormGroup;
  constructor() { }

  the_same(term1: string , term2: string) {
    return ( group: FormGroup) => {
      let pass1 = group.controls[term1].value;
      let pass2 = group.controls[term2].value;
      if (pass1 === pass2){
        return null;
      }
      return {sonigules: true};
    }
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
  }
}
