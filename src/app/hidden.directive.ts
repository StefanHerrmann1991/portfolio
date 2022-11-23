import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {

  constructor(private element: ElementRef) {
    console.log(this.element);
    this.element.nativeElement.classList.add('hidden');
  }

}
