import { Component, OnInit } from '@angular/core';

import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss']
})
export class TriggerComponent implements OnInit {

  constructor(
    private testService: TestService
  ) { }

  ngOnInit(): void {
  }

  fire(): void {
    this.testService.push(123);
  }

}
