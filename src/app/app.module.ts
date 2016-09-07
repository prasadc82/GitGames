import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { ListCompareModule } from './features/list-compare/list-compare.module';
import { LiveCompareModule } from './features/live-compare/live-compare.module';

import { routing }            from './app.routes';

@NgModule({
    declarations: [AppComponent],
    imports:      [BrowserModule, ListCompareModule, LiveCompareModule, routing],
    bootstrap:    [AppComponent],
})

export class AppModule {}