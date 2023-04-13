import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { EsnapService } from 'src/app/services/esnap.service';

@Component({
  selector: 'app-tiles-dashboard',
  templateUrl: './tiles-dashboard.component.html',
  styleUrls: ['./tiles-dashboard.component.css']
})
export class TilesDashboardComponent implements OnInit {

  data: any[];


  constructor(private service: EsnapService, private router: Router, private dataStore: DataStoreService) {

  }

  ngOnInit() {
  }

  searchBook(){

    this.service.getBooklist('a')
    .subscribe(response => {
      let responseData: any;
      responseData = response
      console.log(responseData['items']);
      this.data = responseData['items'];
      this.dataStore.setSearchData(this.data);
      this.router.navigate(['dashboard/searchresult']);

     
    }
    )
  }

}
