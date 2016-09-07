import {Component, Input} from '@angular/core';

@Component({
  selector: 'game-element',
  template: require('./game-element.tmpl.html'),
  styles: [`
  .border-10{border-radius: 10px;}
  .text-cap{text-transform: capitalize;}
  `]

})
export class GameElement {
  @Input() detail;

  ngOnInit() {

  }
}
