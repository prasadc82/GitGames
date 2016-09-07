import {Component, Input, Output, EventEmitter} from '@angular/core';
import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';
import {Observable} from 'rxjs/Observable';

import {RepoList} from '../services/repo-list';
import {RepoElement} from './../repo-element';

import 'rxjs/add/operator/map';

// css
let css = require('./repo-finder.css');

@Component({
  selector: 'repo-finder',
  template: require('./repo-finder.tmpl.html'),
  styles: [`${css}`],
  directives: [PaginationControlsCmp, RepoElement],
  pipes: [PaginatePipe],
  providers: [PaginationService, RepoList]
})
export class RepoFinder {
  @Output() stats = new EventEmitter();

  selectedRepo: any = '';
  page: string = '1';
  totalCount: any = 0;
  popularityValueMax: number;
  repos: Array<any> = [];

  constructor(private _repoList: RepoList) {}

  getPage(queryString, page) {
    Observable.from(this._repoList.getRepos(queryString, page))
    .map((respone) => {
      if (page == 1) {
        this.popularityValueMax = respone.items[0].stargazers_count; ;
      }
      respone.items.map((item) => {
        item.popularity_meter = (item.stargazers_count / this.popularityValueMax ) * 100;
        return item;
      });
      return respone;
    })
    .subscribe({
        next: (response) => {
          this.repos = response.items;
          this.totalCount = response.total_count;
          this.page = page;
        },
        error: (err) => {
          this.repos = [];
          this.stats.emit({});
        }
      });
  }

 selectAndEmitRepo(repo: any) {
   this.selectedRepo = repo;
   this.stats.emit(repo);
 }

}
