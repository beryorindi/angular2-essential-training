import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yg-guitar-item',
  templateUrl: 'app/guitar-item.component.html',
  styleUrls: ['app/guitar-item.component.css']
})
export class GuitarItemComponent {
  @Input() guitarItem;
  @Output() delete = new EventEmitter();
  @Output() preview = new EventEmitter();

  onDelete() {
    this.delete.emit(this.guitarItem);
  }

   onPreview(){
    this.preview.emit(this.guitarItem);
    console.log("preview");
  }
}
