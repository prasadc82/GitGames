import { provideRouter, RouterConfig } from '@angular/router';

import {LiveComparision} from './live-comparision/live-comparision.component';
import {ListGames} from './list-games/list-games.component';

export const routes: RouterConfig = [
  { path: '', component: LiveComparision },
  // { path: 'liveComparision', component: LiveComparision },
  { path: 'listGames', component: ListGames }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];