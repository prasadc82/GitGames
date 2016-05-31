import { Injectable } from '@angular/core';
import {URLSearchParams, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class RepoList {

  constructor(private http: Http) {};

  getRepos(startsWith: string, pageNumber:string) {

    let search = new URLSearchParams();
    // Setting params
    search.set('q', startsWith); //  || 'sample');
    search.set('language', 'javascript');
    search.set('format', 'json');
    search.set('sort', 'stars');
    search.set('order', 'desc');
    search.set('per_page', '10');
    search.set('page', pageNumber);


    // call
    return this.http
      .get('https://api.github.com/search/repositories', { search })
      .map(response => response.json());

  }
}
