import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LiveComparision} from './live-comparision/live-comparision.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'liveComparision', component: LiveComparision}
]);