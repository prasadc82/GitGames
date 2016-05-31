import {
  beforeEachProviders,
  inject,
  injectAsync,
  it,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';
// import { AppState } from './app.service';

import {RepoManagerService} from './services/repo-manager';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    App,
    RepoManagerService
  ]);

  it('repo manager to be set', inject([ App ], (app) => {
    expect(app._repoManager).toBeDefined();
  }));

});
