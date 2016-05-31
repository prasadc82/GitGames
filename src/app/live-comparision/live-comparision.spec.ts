import {
  beforeEachProviders,
  inject,
  injectAsync,
  it,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { LiveComparision } from './live-comparision.component';
import { RepoManagerService } from './../services/repo-manager';

describe('LiveComparision', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    LiveComparision,
    RepoManagerService
  ]);

  it('repo manager to be set', inject([ LiveComparision ], (lc) => {
    expect(lc._repoManagerService).toBeDefined();
  }));
  
  it('isStatsEmpty', inject([LiveComparision], (lc) => {
    expect(lc.isStatsEmpty({})).toEqual(true);
  }));
  
  it('isStatsEmpty', inject([LiveComparision], (lc) => {
    expect(lc.isStatsEmpty({ left: { forks: 10 }})).toEqual(false);
  }));  
});
