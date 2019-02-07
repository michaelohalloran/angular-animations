import { Component } from '@angular/core';
import { trigger, animation, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divStyle', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(1500))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      transition('normal => highlighted', animate(1500)),
      transition('highlighted => normal', animate(1000)),
      transition('* <=> shrunken', [
        style({'background-color': 'orangered'}),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(1500))
    ]),
  ]
})
export class AppComponent {

  list = ['Milk', 'Sugar', 'Bread'];
  initState: string = 'normal';
  wildState: string = 'normal';

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

   onAnimate() {
      this.initState = (this.initState === 'normal') ? 'highlighted': 'normal';
      this.wildState = (this.wildState === 'normal') ? 'highlighted': 'normal';
    }

    onShrink() {
      this.wildState = 'shrunken';
    }
}
