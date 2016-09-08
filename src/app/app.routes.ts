import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'liveComparision', pathMatch: 'full'},
  // { path: 'liveComparision', component: LiveComparision },
  { path: 'listGames', loadChildren: 'app/features/list-compare/list-compare.module#HeroModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);