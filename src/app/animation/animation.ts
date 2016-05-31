import {Input, OnInit, ElementRef, Directive} from '@angular/core';
import { AnimationBuilder } from '@angular/platform-browser/src/animate/animation_builder';


@Directive({
  selector: '[widthanimation]'
})
export class Animation implements OnInit {
  @Input() toWidth;

  constructor(private _e: ElementRef, private _ab: AnimationBuilder){}

  ngOnInit() {
    let animation = this._ab.css();
    animation
      .setDuration(2000)
      .setFromStyles({ width: '0%' })
      .setToStyles({ width: this.toWidth+'%' })
      .start(this._e.nativeElement);
  }

}
