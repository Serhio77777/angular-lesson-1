import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { FormBuilder, Validators } from '@angular/forms';

import { Child } from '../../interfaces/child';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  children$: Observable<Array<Child>>;
  counter: number = 0;
  fireVideo: boolean = false;

  fb = new FormBuilder()

  childForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    src: ['', Validators.required]
  })

  constructor(
    private router: Router,
    private testService: TestService
  ) {}

  ngOnInit() {
    // const childId = this.route.snapshot.paramMap.get('id');
    this.children$ = this.testService.getAll();
    this.subscribe();
  }

  goToItems(id: string) {
    this.router.navigate([`/child/${id}`]);
  }
  change(id: string) {
    // this.router.navigate([`/child/${id}`]);
  }
  onSubmit() {
    const data = this.childForm.value;
    this.testService.create(data);
    this.childForm.reset();
  }
  remove(id: string) {
    // this.router.navigate([`/child/${id}`]);
  }

  triggeredEvent(data): void {
    console.log('DATA_FROM_CHILD_TRIGGER', data);
    this.counter++;
    this.fireVideo = !this.fireVideo;
  }

  subscribe(): void {
    this.testService.take().subscribe((data) => this.triggeredEvent(data))
  }

  unsubscribe(): void {
    this.testService.take().unsubscribe()
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }
}
