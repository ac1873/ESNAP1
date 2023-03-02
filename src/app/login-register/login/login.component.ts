import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: '',
      password: ''
    })

  }

  checkLogin() {

    if (this.loginForm.controls['userName'].value == 'alwinpaulc777@gmail.com' && this.loginForm.controls['password'].value == 'alwinpaulc777@gmail.com') {
      console.log('Successful')
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid Credentials')
    }
  }


}

