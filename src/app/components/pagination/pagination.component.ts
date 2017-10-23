import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  totalPage : number = 0;

  @Input()
  params : {[key:string] : string | number} = {};

  @Input()
  total : number = 0;

  @Input()
  page : number = 0;

  @Output()
  goTo : EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  totalPages() {
      return Math.ceil(this.total / 5);
  }

  rangeStart() {
      return Math.floor(this.page / 10) * 10 + 1;
  }

  pagesRange() {

  }

  prevPage() {
      return Math.max(1,this.page + 1);
  }

  nextPage() {
      return Math.min(this.page + 1, this.totalPages());
  }

}
