import { Component, OnInit } from '@angular/core';
import {RemoteCallService} from "../../services/remote-call.service";
import {ItemsService} from "../../services/items.service";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Item} from "../../model/item";

@Component({
  selector: 'app-show-items',
  templateUrl: './show-items.component.html',
  styleUrls: ['./show-items.component.css']
})
export class ShowItemsComponent implements OnInit {
  items : Observable<Item[]>;

  constructor(private itemsService : ItemsService) { }

  ngOnInit() {
    this.itemsService.getItemsFromFile()
        .subscribe((items)=>{
      this.items = items;
    });
  }

}
