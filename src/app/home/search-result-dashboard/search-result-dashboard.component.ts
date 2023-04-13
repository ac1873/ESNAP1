import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-search-result-dashboard',
  templateUrl: './search-result-dashboard.component.html',
  styleUrls: ['./search-result-dashboard.component.css']
})
export class SearchResultDashboardComponent implements OnInit {

  list$: any;
  searchData: any;
  dataList: any;
  constructor(private dataStore: DataStoreService, private router: Router) {

  }

  ngOnInit(): void {
    this.dataStore.searchData.subscribe(data => {
      this.searchData = data;
      console.log('Inside Search :');
      console.log(this.searchData);
      this.dataList = [];
      if (this.searchData == 'No items to display') {
        this.dataList = [];
      } else {

        if (data) {
          for (let i = 0; i < this.searchData.length; i++) {
            this.dataList.push(
              {
                id: this.searchData[i].id,
                title: this.searchData[i].volumeInfo?.title,
                image: this.searchData[i].volumeInfo?.imageLinks?.thumbnail,
                description: this.searchData[i].volumeInfo?.description,
                price: Math.floor(Math.random() * 10)
              }
            )
          }
          console.log('After Modification :');
          console.log(this.dataList);
        }

      }

      // this.dataList = [{}];

    })
  }

  itemSelected(item: any) {

    this.dataStore.setselectedData(item);
    this.router.navigate(['dashboard/itemDetails']);

  }

}
