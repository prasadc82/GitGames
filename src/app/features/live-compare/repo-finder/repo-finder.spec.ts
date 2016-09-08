import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

import { HTTP_PROVIDERS } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Load the implementations that should be tested
import { RepoFinder } from './repo-finder.component';
import { RepoList } from './../services/repo-list';

describe('RepoFinder', () => {
  beforeEachProviders(() => [
    RepoFinder,
    RepoList,
    HTTP_PROVIDERS
  ]);

  it('initialize repo-list', inject([RepoFinder], (rf) => {
    expect(rf._repoList).toBeDefined();
  }));
  
  it('getPage', inject([RepoFinder], (rf) => {
    spyOn(rf._repoList, 'getRepos').and.callFake(() => {
      return Observable.of({ items: [{
        forks: 20,
        owner: {
          login: 'prasadc'
        }
      }], total_count: 1});
    });
    rf.getPage('prasadc', 1);
    expect(rf.repos.length).toEqual(1);
    expect(rf.page).toEqual(1);
    expect(rf.totalCount).toEqual(1);
    // expect()
  }));
  
  it('getPage error', inject([RepoFinder], (rf) => {
    spyOn(rf._repoList, 'getRepos').and.callFake(() => {
      return Observable.throw(new Error('error!'));
    });
    rf.getPage('prasadc', 1);
    expect(rf.repos.length).toEqual(0);
  }));
});
