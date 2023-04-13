import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private setData = new BehaviorSubject<any>("No items to display");
  searchData = this.setData.asObservable();

  private setSelectedItem = new BehaviorSubject<any>("No items to display");
  selectedItemData = this.setSelectedItem.asObservable();
  cartItems: any = [];
  loginStatusFlag : boolean = false ;


  constructor() { }

  setSearchData(data: any) {
    this.setData.next(data)
  }

  setselectedData(data: any) {
    this.setSelectedItem.next(data)
  }

  addToCart(data: any) {
    this.cartItems.push(data)
    console.log("Items In cart :", this.cartItems)
  }

  returnCart() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = []
  }

  deleteFromCart(position: any) {
    this.cartItems.push(position)
  }

  loginStatus(status: any) {
    this.loginStatusFlag = status
  }

  getLoginStatus() {
    return this.loginStatusFlag;
  }



}
