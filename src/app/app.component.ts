import {Component} from '@angular/core';
import {RepoManagerService} from './services/repo-manager';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {LiveComparision} from './live-comparision';
import {ListGames} from './list-games';

let css = require('./app.css');

@Component({
  selector: 'app',
  template: require('./app.tmpl.html'),
  styles: [`${css}`],
  providers: [RepoManagerService],
  directives: [ROUTER_DIRECTIVES]
})

// @RouteConfig([{
//     name: 'LiveComparision',
//     path: '/liveComparision',
//     component: LiveComparision,
//     useAsDefault: true
//   },
//   {
//     name: 'ListGames',
//     path: '/listGames',
//     component: ListGames
//   }
// ])

export class App {


  constructor(public _repoManager: RepoManagerService) {

  }


};