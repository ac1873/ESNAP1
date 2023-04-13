import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalPrice = 0;
  cartList: any = [];
  testItem = [
    {
      name: 'Test1',
      id: 101
    },
    {
      name: 'Test2',
      id: 102
    },
    {
      name: 'Test2',
      id: 103
    }
  ]
  constructor(private dataStore: DataStoreService, private router: Router) {

  }

  ngOnInit() {

    this.cartList = this.dataStore.returnCart()
    this.totalPrice = 0;
    console.log("Cart List :", this.cartList)

    for (let i = 0; i < this.cartList.length; i++) {
      this.totalPrice = this.totalPrice + this.cartList[i].price;
    }


  }

  buyNow() {

  }

  itemSelected(item: any) {

    this.dataStore.setselectedData(item);
    this.router.navigate(['dashboard/itemDetails']);

  }

  proceedCheckout() {

  }


}
