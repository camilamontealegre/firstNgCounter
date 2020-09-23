import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnChanges {
  
  @Input() counterParent: number;
  constructor() { }

  ngOnChanges(changes: SimpleChanges){

  }

  ngOnInit(): void{}
}
