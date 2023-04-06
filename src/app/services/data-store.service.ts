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
  constructor() { }

  setSearchData(data: any) {
    this.setData.next(data)
  }

  setselectedData(data: any) {
    this.setSelectedItem.next(data)
  }
}
