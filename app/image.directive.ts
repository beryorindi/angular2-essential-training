import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mwImage]'
})
export class ImageDirective {
  @HostBinding('class.is-show') visibility = false;

  @HostBinding('class.is-show-hovering') hovering = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  
  @Input() set mwImage(value) {
    this.visibility = value;
  }
}
