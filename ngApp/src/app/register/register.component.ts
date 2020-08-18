import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createForm: FormGroup;


  constructor(private _auth: AuthService, private fb: FormBuilder, private _router: Router) {

    this.createForm = this.fb.group({
      email: ['', Validators.required],
      password: ''
    });
  }

  ngOnInit() {
  }

  registerUser(email, password) {
    this._auth.registerUser(email, password)
      .subscribe(
        res => {
          console.log(res)

          localStorage.setItem('token', res.token)
        },
        err => console.log(err))

    this.createForm = this.fb.group({
      email: ['', Validators.required],
      password: ''
    });
  }
}
