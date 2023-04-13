import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loginStatus: boolean = false;
  year: number;
  

  constructor(private router: Router, private dataStore: DataStoreService) {

  }

  ngOnInit() {
    // throw new Error('Method not implemented.');
    this.loginStatus = this.dataStore.getLoginStatus();

    this.year = (new Date()).getFullYear();

  }
  title = 'EsnapProject';

  itemSelected() {

    // this.dataStore.setselectedData(item);
    this.router.navigate(['dashboard/cart']);

  }


}
