import {Component, Input, Output, EventEmitter, ViewEncapsulation, } from '@angular/core';
import { Animation } from '../animation/animation';

let css = require('./repo-element.css')
@Component({
  selector: 'repo-element',
  template: require('./repo-element.html'),
  styles: [`${css}`],
  encapsulation: ViewEncapsulation.None,
  directives: [Animation]
})

export class RepoElement {
  @Input() repo: any;
  @Input() popularityValueMax: number;
  @Input() selectedRepo: {};
  @Output() repoSelected: EventEmitter<any> = new EventEmitter();
  popularity_meter: string = '0%';
  timer: any;

  constructor(){}

  repoSelect(repo) {
    this.repoSelected.emit(repo);
  }
}
