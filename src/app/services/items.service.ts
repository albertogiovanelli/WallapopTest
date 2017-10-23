import { Injectable } from '@angular/core';
import {Item} from "../model/item";
import {RemoteCallService} from "./remote-call.service";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';

@Injectable()
export class ItemsService {
private items$ = new BehaviorSubject<Item[]>([]);
private favouriteItems$ = new BehaviorSubject<Item[]>([]);

    constructor(private remoteCallService : RemoteCallService) { }

  getItemsFromFile() {
    return this.remoteCallService.getData()
        .map((body)=> {
          body.items.forEach((data)=>{
            let item = new Item(data.title,data.description,data.price,data.email,data.image);
            let items = [item,...this.items$.getValue()];
            this.items$.next(items);
          });
          return this.items$.asObservable();
        });
  }

  removeItem(item){
    let items = this.items$.getValue().filter(i => i !== item);
    this.items$.next(items);
  }

  addItem(item){
      let items = [item,...this.items$.getValue()];
      this.items$.next(items);
  }

  getItems(){
        return this.items$.asObservable();
  }

}
