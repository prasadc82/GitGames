import { NgModule }       from '@angular/core';
import { CommonModule  } from '@angular/common';
import { HTTP_PROVIDERS  } from '@angular/http';

import { LiveComparision } from './live-comparision/live-comparision.component';
import { RepoElement } from './repo-element/repo-element.component';
import { RepoFinder } from './repo-finder/repo-finder.component';

import { SahredModule } from './../../shared/shared.module';

import {PaginatePipe, PaginationControlsCmp, PaginationService} from 'ng2-pagination';

import { RepoManagerService } from './../../services/repo-manager';
import { RepoList } from './../../services/repo-list';

import {routing} from './live-compare.routes';

@NgModule({
    declarations: [LiveComparision, RepoElement, RepoFinder, PaginatePipe, PaginationControlsCmp],
    imports:      [CommonModule, SahredModule, routing],
    exports:    [LiveComparision],
    providers: [PaginationService, RepoManagerService, RepoList, HTTP_PROVIDERS]
})

export class LiveCompareModule {}