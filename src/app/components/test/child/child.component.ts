import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Child } from 'src/app/interfaces/child';

import { TestService } from '../../../services/test.service';

@Component({
  selector: 'app-test-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildTestComponent implements OnInit {
  child: Child;
  selectedId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    const childId = this.route.snapshot.paramMap.get('id');
    this.child = this.testService.getOne(childId);
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = Number(params.get('id'));
    //     console.log(params);
    //   })
    // );
  }

  back(): void {
    this.router.navigate(['/test']);
  }

  change(id: string) {
    // this.router.navigate([`/child/${id}`]);
  }

  remove(id: string) {
    // this.router.navigate([`/child/${id}`]);
  }
}
