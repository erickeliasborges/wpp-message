import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-wpp-message',
  templateUrl: './wpp-message.component.html',
  styleUrls: ['./wpp-message.component.css']
})
export class WppMessageComponent implements OnInit {

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

}
