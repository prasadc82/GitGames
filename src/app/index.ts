// App
export * from './app.component';
export * from './app.service';

import { AppState } from './app.service';
// import { APP_ROUTER_PROVIDERS } from './app.routes';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
  // APP_ROUTER_PROVIDERS
];
