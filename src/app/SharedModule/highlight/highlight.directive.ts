import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef){
  }

  @HostBinding('class')
  attrClass = 'headingClass';

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.el.nativeElement.style.display = 'block';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.el.nativeElement.style.display = 'inline';
  }
}
