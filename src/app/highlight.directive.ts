import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elref: ElementRef) {
    console.log('Hi from directive');
    console.log(this.elref);
    console.log(this.elref.nativeElement);
    this.elref.nativeElement.style.color = 'Green';
    this.elref.nativeElement.style.textAlign = 'left';
  }

}
