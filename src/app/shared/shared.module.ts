import { NgModule }       from '@angular/core';
import { CommonModule  } from '@angular/common';

import { GameElement } from './game-element/game-element.component';

@NgModule({
    declarations: [GameElement],
    imports:      [CommonModule],
    exports:    [GameElement]
})

export class SahredModule {}