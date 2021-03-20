import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  // inputs: ['testProps', 'id: account-id'],
  // outputs: ['everySecond', 'fiveSecs: everyFiveSeconds'],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // id: string|null = null;
  // testProps: string|null = null;
  // everySecond = new EventEmitter<string>();
  // fiveSecs = new EventEmitter<string>();

  @Input('account-id') id: string|null = null;
  @Input() testProps: string|null = null;
  @Output() everySecond = new EventEmitter<string>();
  @Output('everyFiveSeconds') fiveSecs = new EventEmitter<string>();

  constructor() {
    // setInterval(() => this.everySecond.emit('event'), 1000);
    // setInterval(() => this.fiveSecs.emit('event'), 5000);
  }

  ngOnInit(): void {
  }

}
