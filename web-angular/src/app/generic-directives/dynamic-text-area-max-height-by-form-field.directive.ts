import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[dynamicTextAreaMaxHeightByFormField]'
})
export class DynamicTextAreaMaxHeightByFormFieldDirective implements DoCheck {

  @Input() adjustmentFactor: number = 0.75;

  constructor(private el: ElementRef) { }

  ngDoCheck() {
    this.adjustTextAreaMaxHeight();
  }

  private adjustTextAreaMaxHeight() {
    const parent = this.el.nativeElement.closest('.mat-form-field');
    if (parent) {
      const parentHeight = parent.offsetHeight;
      const adjustedHeight = parentHeight * this.adjustmentFactor;
      const textArea = this.el.nativeElement.querySelector('textarea');
      if (textArea && (adjustedHeight > 0)) {
        textArea.style.maxHeight = `${adjustedHeight}px`;
      }
    }
  }

}
