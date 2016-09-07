import {
  beforeEachProviders,
  inject,
  injectAsync,
  it,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ListGames } from './list-games.component';
import { RepoManagerService } from './../services/repo-manager';

let games = [{
  forks: 20,
  owner: {
    login: 'prasadc'
  }
}];

describe('List Games', () => {

  beforeEachProviders(() => [
    ListGames,
    RepoManagerService
  ]);

  it('repo-manager to be set', inject([ListGames], (lg) => {
    expect(lg._repoManager).toBeDefined();
  }));

  it('ngOninit with non-empty response for list-games', inject([ListGames], (lg) => {
    spyOn(lg._repoManager, 'listGames').and.callFake(() => {
      return { once: (value, callback) => {
        callback({
          val: function() {
            return games;
          }
        });
      }};
    });
    lg.ngOnInit();
    expect(lg.listGames).toEqual([{ forks: 20, owner: { login: 'prasadc'}}]);
    expect(lg.listGamesMessage).toEqual('Fetching games list...');
  }));

  it('ngOninit with empty response for list-games', inject([ListGames], (lg) => {
    spyOn(lg._repoManager, 'listGames').and.callFake(() => {
      return { once: (value, callback) => {
        callback({
          val: function() {
            return null;
          }
        });
      }};
    });
    lg.ngOnInit();
    expect(lg.listGames).toEqual([]);
    expect(lg.listGamesMessage).toEqual(`There are no saved games.
        Please go to the live comparision to enjoy this game. :)`);
  }));
});
