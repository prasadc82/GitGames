import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

import { HTTP_PROVIDERS, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Load the implementations that should be tested
import { RepoList } from './repo-list';

let repos = { page: 1,
              total_count: 1, 
              items: [ {
               forks: 20,
               owner: {
                 login: 'prasadc'
               } 
              }] };
// let search = new URLSearchParams();
// // Setting params
// search.set('q', 'prasadc');
// search.set('language', 'javascript');
// search.set('format', 'json');
// search.set('sort', 'stars');
// search.set('order', 'desc');
// search.set('per_page', '10');
// search.set('page', '1');


describe('RepoList', () => {
  beforeEachProviders(() => [
    RepoList,
    HTTP_PROVIDERS
  ]);
  
  it('http is initialized', inject([RepoList], (rl) => {
    expect(rl.http).toBeDefined();
  }));

  it('getRepos', inject([RepoList], (rl) => {
    spyOn(rl.http, 'get').and.callFake(() => {
      return Observable.of(repos);
    });
    
    expect(rl.getRepos('prasadc', 1)).toBeDefined();
    expect(rl.http.get).toHaveBeenCalled();
    // expect(rl.http.get).toHaveBeenCalledWith('https://api.github.com/search/repositories', 
    //                                           { search: search });
  }));
});
