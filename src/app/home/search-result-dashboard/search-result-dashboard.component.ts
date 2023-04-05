import { Component, OnInit } from '@angular/core';
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
  constructor(private dataStore: DataStoreService) {

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
                title: this.searchData[i].volumeInfo.title,
                image: this.searchData[i].volumeInfo.imageLinks.thumbnail
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

}
