import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EsnapService } from 'src/app/services/esnap.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {

  keyword = 'productName';
  data = [{}];
  constructor(private service: EsnapService, private router: Router) {

  }

  ngOnInit(): void {

  }

  selectEvent(item: any) {
    // do something with selected item
    let x = item;
    this.router.navigate(['/productDetails/productListing']);
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    this.data = [
      {
        id: 1,
        productName: 'Iphone 14'
      },
      {
        id: 2,
        productName: 'Samsung S23 Ultra'
      },
      {
        id: 3,
        productName: 'HyperX Cloud Alpha'
      },
      {
        id: 3,
        productName: 'Apple Watch Ultra'
      },
      {
        id: 4,
        productName: 'Beeline Velo 2'
      },
      {
        id: 5,
        productName: 'Google Pixel 7'
      },
      {
        id: 6,
        productName: 'iRobot Roomba J7+'
      },
      {
        id: 7,
        productName: 'Meta Quest Pro'
      },
      {
        id: 8,
        productName: 'Nothing Ear (Stick)'
      },
      {
        id: 9,
        productName: 'Apple Airpods Gen 2'
      },
      {
        id: 10,
        productName: 'Samsung Galaxy Fold 4'
      },
      {
        id: 11,
        productName: 'Sony WH-1000XM5'
      },
      {
        id: 12,
        productName: 'MacBook Pro with M2 chip'
      },
      {
        id: 13,
        productName: 'DJI Mini 3 Pro'
      },
      {
        id: 14,
        productName: 'VAHA S Fitness Mirror'
      },
      {
        id: 15,
        productName: 'Therabody Wave Roller'
      },
      {
        id: 16,
        productName: 'Samsung M8 Smart monitor'
      },
      {
        id: 17,
        productName: 'Gocycle G4 electric bike'
      },
      {
        id: 18,
        productName: 'Insta360 One'
      },
      {
        id: 19,
        productName: 'Generation Zerøgrand II'
      },
      {
        id: 20,
        productName: 'Sony Linkbuds'
      },
      {
        id: 21,
        productName: 'Urbanista Los Angeles headphones'
      },
      {
        id: 22,
        productName: 'AllBirds Tree Dasher 2'
      },
      {
        id: 23,
        productName: 'LEGO App-controlled Transformation Vehicle'
      },
      {
        id: 24,
        productName: 'Skydio 2+'
      },
      {
        id: 25,
        productName: 'DJI Action 2'
      },
      {
        id: 26,
        productName: 'Rocketbook Smart Reusable Notebook'
      },
      {
        id: 27,
        productName: 'KODAK Luma 150 Pocket Projector'
      },
      {
        id: 28,
        productName: 'Biolite FirePit+'
      },



    ];
  }

  onFocused(e: any) {
    // do something when input is focused
  }

  autoCompleteClose() {
    this.data = [];
  }

}
