import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName : ['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(10)])],
      email : ['', Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(100), Validators.pattern('^[a-zA-Z0-9]+(.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15}( )*?)$')]) ]
    });
  }

}
