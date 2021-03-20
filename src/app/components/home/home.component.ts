import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import { FormBuilder, FormArray, Validators } from '@angular/forms';

interface ICurrentItem {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  // encapsulation: ViewEncapsulation.Emulated
  // entryComponents: [LoginComponent]
  // animations
  // template: `
  //   test-template
  // `,
  // interpolation: ['%', '%']
  // viewProviders
  // moduleId: 'app'
  // preserveWhitespaces: true
})
export class HomeComponent implements OnInit, OnDestroy {
  id: string = '153576';
  clickMessage: string;
  currentItem: ICurrentItem = {
    name: 'test'
  };
  permission: boolean = false;
  submitMessage: string = 'Success';
  a1: string = 'test';
  somePropsName: string = 'ghjkl';

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  // prop: string = 'test';
  // heroes: Array<any> = [
  //   {
  //     a: 1,
  //     b: 2
  //   },
  //   {
  //     a: 3,
  //     b: 4
  //   },
  //   {
  //     a: 5,
  //     b: 6
  //   }
  // ];

  // testClick(data?: any): void {
  //   this.prop = data ? data.a : 'None';
  // }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  eventBinding(event: Event): void {
    console.log(event)
  }

  changeCurrentItem(value: string) {
    this.currentItem.name = value;
  }

  changePermission(value: boolean) {
    this.permission = value;
    // setInterval(() => {
    //   this.permission = !this.permission;
    // }, 1000)
  }
  onTestSubmit(prop) {
    console.log(prop)
  }
  onSubmit() {
    console.log(this.profileForm);
  }

  onEverySecond() {
    console.log('second')
  }
  onEveryFiveSeconds() {
    console.log(5)
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  updateProfile() {
    // console.log(this.profileForm)
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}
