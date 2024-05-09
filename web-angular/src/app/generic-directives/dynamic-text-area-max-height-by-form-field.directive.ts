import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dynamicTextAreaMaxHeightByFormField]'
})
export class DynamicTextAreaMaxHeightByFormFieldDirective {

  constructor(private el: ElementRef) { }

  @Input() adjustmentFactor: number = 0.75;

  ngAfterViewInit() {
    this.adjustTextAreaMaxHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.adjustTextAreaMaxHeight();
  }

  private adjustTextAreaMaxHeight() {
    const parent = this.el.nativeElement.closest('.mat-form-field');
    if (parent) {
      const parentHeight = parent.offsetHeight;
      const adjustedHeight = parentHeight * this.adjustmentFactor;
      const textArea = this.el.nativeElement.querySelector('textarea');
      if (textArea) {
        textArea.style.maxHeight = `${adjustedHeight}px`;
      }
    }
  }

}
