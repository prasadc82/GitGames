import {Component, Input, Output, EventEmitter, ViewEncapsulation,
  trigger, state, transition, style, animate, OnInit } from '@angular/core';
import {NgStyle} from '@angular/common';
let css = require('./repo-element.css');
@Component({
  selector: 'repo-element',
  template: require('./repo-element.html'),
  styles: [`${css}`],
  directives: [NgStyle],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('someAnimation', [
      state('void', style({opacity: '0'
    })),
    state('*', style({
      opacity: '0.8'
    })),
      transition('void <=> *', animate('2s ease-in-out'))
    ])
  ]
})

export class RepoElement implements OnInit {
  @Input() repo: any;
  @Input() popularityValueMax: number;
  @Input() selectedRepo: {};
  @Output() repoSelected: EventEmitter<any> = new EventEmitter();
  repoWidth: string = '0';

  ngOnInit() {
    this.repoWidth = this.repo.popularity_meter + '%';
  }

  repoSelect(repo) {
    this.repoSelected.emit(repo);
  }
}
