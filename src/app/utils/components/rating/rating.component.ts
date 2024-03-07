import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0;
  @Output() actionPulse = new EventEmitter<any>();

  list:Array<any> = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.rating; index++) {
      this.list.push(1);
    }
  }

  select(){
    this.actionPulse.emit(this.rating);
  }

}
