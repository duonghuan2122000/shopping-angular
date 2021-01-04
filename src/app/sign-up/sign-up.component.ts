import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    re_password: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get phone(){
    return this.signUpForm.get('phone');
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get re_password(){
    return this.signUpForm.get('re_password');
  }

}
