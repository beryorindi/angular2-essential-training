import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})

export class PopUpComponent {
  @Input() mediaItem;
  @Output() preview = new EventEmitter();

  closePreview(){
    this.preview.emit();
  }

}