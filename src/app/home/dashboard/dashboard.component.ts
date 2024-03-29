import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { DataStoreService } from 'src/app/services/data-store.service';
import { EsnapService } from 'src/app/services/esnap.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  keyword = 'title';
  data: any[];
  private keyUpSubject = new Subject<any>();

  constructor(private service: EsnapService, private router: Router, private dataStore: DataStoreService) {

  }

  ngOnInit(): void {

    this.keyUpSubject.pipe(debounceTime(800), distinctUntilChanged()).subscribe((val) => {
      this.onChangeSearch(val)
    }
    )

  }

  onSearchKeyup(event: any) {
    const val = event.target.value;
    this.keyUpSubject.next(val);
  }

  selectEvent(item: any) {
    // route to product details page
    let x = item;
    this.router.navigate(['/productDetails/productListing']);
  }

  onChangeSearch(val: any) {
    // fetch remote data from here
    //call book list API
    this.service.getBooklist(val)
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

 

  autoCompleteClose() {
    this.data = [];
  }

}
