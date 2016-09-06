import {Component, Input, Output, EventEmitter, ViewEncapsulation, trigger, state, transition, style, animate } from '@angular/core';

let css = require('./repo-element.css')
@Component({
  selector: 'repo-element',
  template: require('./repo-element.html'),
  styles: [`${css}`],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('toWidth', [
      state('void', style({width: '0%'})),
      state('*', style({width: '*%'})),
      transition('void => *', [
        style({width: '0%'}),
        animate('300ms ease-in', style({width: '*%'}))
      ])
    ]) 
  ]
})

export class RepoElement {
  @Input() repo: any;
  @Input() popularityValueMax: number;
  @Input() selectedRepo: {};
  @Output() repoSelected: EventEmitter<any> = new EventEmitter();
  constructor(){}

  repoSelect(repo) {
    this.repoSelected.emit(repo);
  }
}
