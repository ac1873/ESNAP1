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


    })
  }

  buyNow() {

  }

  addToCart() {
    this.dataStore.addToCart(this.selectedItem);
  }

  clearCart() {
    this.dataStore.addToCart(this.selectedItem);
  }

}


