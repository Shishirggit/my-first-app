import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  addItemToList(item: string) {
    this.items.push(item);
  }
  items :string[] = ['I1','I2','I3'];

  getItems():string[]{
    return this.items;
  }
  constructor() { }
}
