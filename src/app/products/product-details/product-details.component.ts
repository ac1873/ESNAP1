import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  selectedItem: any;


  constructor(private dataStore: DataStoreService, private router: Router) {

  }

  ngOnInit(): void {

    this.dataStore.selectedItemData.subscribe((response: any) => {
      this.selectedItem = response;
      console.log('Inside Details :');
      console.log(this.selectedItem);
      // this.dataList = [];
      // if (this.searchData == 'No items to display') {
      //   this.dataList = [];
      // } else {

      //   if (data) {
      //     for (let i = 0; i < this.searchData.length; i++) {
      //       this.dataList.push(
      //         {
      //           id: this.searchData[i].id,
      //           title: this.searchData[i].volumeInfo.title,
      //           image: this.searchData[i].volumeInfo.imageLinks.thumbnail
      //         }
      //       )
      //     }
      //     console.log('After Modification :');
      //     console.log(this.dataList);
      //   }

      // }

      // this.dataList = [{}];

    })
  }

}


