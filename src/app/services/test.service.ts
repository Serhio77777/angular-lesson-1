import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';
import { v4 } from 'uuid';

import { Child } from '../interfaces/child';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  children: Array<Child> = [
    {
      name: 'Dark Lord',
      id: v4(),
      description: 'Nulla rutrum in leo vel suscipit. Pellentesque tellus est, tincidunt vel mauris quis, ullamcorper aliquam orci. Sed efficitur vulputate volutpat. Nam accumsan ultrices libero, non euismod lectus condimentum non. Morbi diam lectus, pretium pulvinar maximus a, tempor tempus nibh. Vestibulum eu nulla ut massa sagittis pellentesque. Donec mattis, justo at semper consequat, eros magna fringilla mi, non tincidunt nunc purus vel nisl. Nulla vitae ante vitae nisl euismod sollicitudin quis quis tellus. Fusce sapien augue, placerat a auctor id, molestie eget velit. Mauris pellentesque odio sed lectus viverra, placerat efficitur nunc efficitur. Vestibulum iaculis auctor nisl, in ullamcorper metus lacinia vel. Vestibulum dignissim neque a lorem dapibus rutrum.',
      src: 'https://i.redd.it/395j7s7023d11.jpg'
    },
    {
      name: 'It Is Perfect',
      id: v4(),
      description: `New Ring, Our Ring, It isn't mark with his shadow, It Is Perfect`,
      src: 'https://i.makeagif.com/media/4-10-2017/R0ZYKt.gif'
    },
    {
      name: 'Sauron',
      id: v4(),
      description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sagittis porta porttitor. Suspendisse pellentesque finibus nulla interdum efficitur. Sed massa nibh, interdum eu dapibus nec, sagittis a neque. Curabitur id quam rutrum, convallis erat nec, condimentum nisl.',
      src: 'https://cdna.artstation.com/p/assets/images/images/000/513/940/large/dmitry-desyatov-darklord-2.jpg?1425269646'
    },
    {
      name: 'To Rule Them All...',
      id: v4(),
      description: `Ash nazg durbatulûk, Ash nazg gimbatul, Ash nazg thrakatulûk, Agh burzum-ishi krimpatul.`,
      src: 'https://u.kanobu.ru/articles/pics/15616c32-4276-4a5e-8430-9908ee77cb0c.jpg'
    }
  ];

  constructor() { }

  getOne(id: string): Child {
    return this.children.find(child => child.id === id);
  }

  getAll(): Observable<Array<Child>> {
    return of(this.children);
  }

  remove(id: string): void {
    this.children = this.children.filter((child) => child.id !== id)
  }

  edit(data: Child): void {
    const childIndex = this.children.findIndex(child => child.id === data.id);
    this.children[childIndex] = data;
  }

  create(data: Child): void {
    data.id = v4();
    this.children.push(data);
  }
// __________________________________________
  trigger: Subject<any> = new Subject();
  take(): any {
    return this.trigger;
  }

  push(data?): void {
    this.trigger.next(data);
  }
// __________________________________________
}
