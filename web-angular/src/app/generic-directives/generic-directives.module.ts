import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextAreaMaxHeightByFormFieldDirective } from 'src/app/generic-directives/dynamic-text-area-max-height-by-form-field.directive';

const PUBLIC = [
  DynamicTextAreaMaxHeightByFormFieldDirective,
]

@NgModule({
  declarations: [
    ...PUBLIC,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...PUBLIC,
  ]
})
export class GenericDirectivesModule { }
