import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ListGames} from './list-games/list-games.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'listGames', component: ListGames}
]);