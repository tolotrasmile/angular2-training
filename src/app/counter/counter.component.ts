import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count: number;

  // Counter value from parent
  @Input() counter: number;
  @Output() result: EventEmitter<number>;

  constructor() {
  }

  ngOnInit() {
    this.count = this.counter;
    this.result = new EventEmitter();
  }

  increment() {
    this.count++;
    this.result.emit(this.count);
  }

}
