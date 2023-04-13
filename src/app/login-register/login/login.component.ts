import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showAlert: boolean = false;

  constructor(private fb: FormBuilder, private router: Router,private dataStore: DataStoreService) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      userName: '',
      password: ''
    })

  }

  checkLogin() {
    this.showAlert = false;
    if (this.loginForm.controls['userName'].value == 'alwinpaulc777@gmail.com' && this.loginForm.controls['password'].value == 'alwinpaulc777@gmail.com') {
      console.log('Successful')
      this.showAlert = false;
      this.dataStore.setselectedData(true);
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid Credentials')
      this.showAlert = true;
    }
  }

  

}

