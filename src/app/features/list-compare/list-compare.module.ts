import { NgModule }       from '@angular/core';
import { CommonModule  } from '@angular/common';
import { HTTP_PROVIDERS  } from '@angular/http';

import { ListGames } from './list-games/list-games.component';
import { RepoManagerService } from './../../services/repo-manager';

import { SahredModule } from './../../shared/shared.module';

import {routing} from './list-compare.routes';

@NgModule({
    declarations: [ListGames],
    imports:      [CommonModule, SahredModule, routing],
    exports:    [ListGames],
    providers: [RepoManagerService, HTTP_PROVIDERS]
})

export class ListCompareModule {}