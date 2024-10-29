import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight: string = '';

  constructor() {}

  @HostListener('click') onClick() {
    if (this.appHighlight) {
      navigator.clipboard
        .writeText(this.appHighlight)
        .then(() => {alert('Copied to clipboard')})
        .catch((e) => {
          console.log('Some error found', e);
        });
    }
  }
}
