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
  // data = [
  //   {
  //     id: '01',
  //     title: 'test1',
  //     image: 'qqqqqqqqq'
  //   },
  //   {
  //     id: '02',
  //     title: 'test2',
  //     image: 'qqqqqqqqq'
  //   },
  //   {
  //     id: '02',
  //     title: 'abc',
  //     image: 'qqqqqqqqq'
  //   }
  // ]
  private keyUpSubject = new Subject<any>();
  // bookList$: any;


  constructor(private service: EsnapService, private router: Router, private dataStore: DataStoreService) {

  }

  ngOnInit(): void {

    this.keyUpSubject.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((val) => {
      this.onChangeSearch(val)
    }
    )

  }

  onSearchKeyup(event: any) {
    const val = event.target.value;
    this.keyUpSubject.next(val);
  }

  selectEvent(item: any) {
    // do something with selected item
    let x = item;
    this.router.navigate(['/productDetails/productListing']);
  }

  onChangeSearch(val: any) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.

    this.service.getBooklist(val)
      .subscribe(response => {
        let responseData: any;
        responseData = response
        console.log(responseData['items']);
        this.data = responseData['items'];
        this.dataStore.setSearchData(this.data);
        this.router.navigate(['dashboard/searchresult']);

        //   this.data = [{}];
        //   if (responseData) {
        //     for (let i = 0; i < responseData['items'].length; i++) {
        //       this.data.push(
        //         {
        //           id: responseData.items[i].id,
        //           title: responseData.items[i].volumeInfo.title,
        //           image: responseData.items[i].volumeInfo.imageLinks.thumbnail
        //         }
        //       )
        //     }
        //   }
      }
      )

    console.log(this.data);

  }

  onFocused(e: any) {
    // do something when input is focused
  }

  autoCompleteClose() {
    this.data = [];
  }

}
