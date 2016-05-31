import {Component} from '@angular/core';
import {RepoManagerService} from './services/repo-manager';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LiveComparision} from './live-comparision';
import {ListGames} from './list-games';

let css = require('./app.css');

@Component({
  selector: 'app',
  template: require('./app.tmpl.html'),
  styles: [`${css}`],
  providers: [RepoManagerService, ROUTER_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([{
    name: 'LiveComparision',
    path: '/liveComparision',
    component: LiveComparision,
    useAsDefault: true
  },
  {
    name: 'ListGames',
    path: 'listGames',
    component: ListGames
  }
])

export class App {


  constructor(public _repoManager: RepoManagerService) {

  }


};