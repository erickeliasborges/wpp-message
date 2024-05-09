import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { CRUD_FORM, FormFactory } from 'src/app/crud-page/interfaces/form-factory';
import { Message } from 'src/app/pages/message/models/message';

@Component({
  selector: 'app-message-edition',
  templateUrl: './message-edition.component.html',
  styleUrls: ['./message-edition.component.scss'],
  providers: [
    {
			provide: CRUD_FORM,
			useExisting: forwardRef(() => MessageEditionComponent),
		},
  ]
})
export class MessageEditionComponent implements FormFactory<Message> {

  public form!: FormGroup;
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(
    private _ngZone: NgZone,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      sql: [null, Validators.required],
      message: [null, Validators.required],
    });
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  updateRecord(record: Message): void {
    Object.assign(record, this.form.getRawValue());
  }

  updateForm(record: Message): void {
    this.form.reset();
    this.form.patchValue(record);
  }

  validate(): boolean {
    return this.form.valid;
  }

  isDirty(): boolean {
    return this.form.dirty;
  }

}
