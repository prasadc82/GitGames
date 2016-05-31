import {
  beforeEachProviders,
  inject,
  injectAsync,
  it,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { LiveComparision } from './live-comparision.component';
import { RepoManagerService } from './../services/repo-manager';

let statsLeft = {
  name: 'ABC',
  owner: {
    login: 'prasadc'
  },
  html_url: 'https://abc.com',
  stargazers_count: 20,
  forks_count: 20,
  watchers_count: 20
}, statsRight = statsLeft;

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
    expect(lc.isStatsEmpty()).toEqual(true);
  }));
  
  it('isStatsEmpty', inject([LiveComparision], (lc) => {
    expect(lc.isStatsEmpty({ left: { forks: 10 }})).toEqual(false);
  }));
  
  it('save button', inject([LiveComparision], (lc) => {
    expect(lc.saveButtonDisabled).toEqual(false);
    expect(lc.saveButtonMessage).toEqual('Save Comparision');
  }));
  
  it('activate', inject([LiveComparision], (lc) => {
    lc.saveButtonDisabled =  true;
    lc.activateButton();
    expect(lc.saveButtonDisabled).toEqual(false);
    expect(lc.saveButtonMessage).toEqual('Save Comparision');
  }));
  
  it('saveComparison', inject([LiveComparision], (lc) => {
    spyOn(lc._repoManagerService, 'addGame').and.callFake(() => {
      return { on: (value, callback) => {
        callback();
      }};
    });
    lc.saveComparison(statsLeft, statsRight);
    expect(lc.saveButtonDisabled).toEqual(true);
    expect(lc.saveButtonMessage).toEqual('Comparision saved.');
  }));

});
