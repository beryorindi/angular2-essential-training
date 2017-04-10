import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'guitar-item-popup',
  templateUrl: 'app/guitar-item-popup.component.html',
  styleUrls: ['app/guitar-item-popup.component.css']
})

export class GuitarItemPopupComponent {
  @Input() imageIndex = 0;
  @Input() guitarItem;
  @Output() preview = new EventEmitter();

  closePreview(){
    this.preview.emit();
  }

  btnPrev(){
    this.guitarItem.images[this.imageIndex].visibility = false;
    if(this.imageIndex > 0){
      this.imageIndex--;
    }
    else{
      this.imageIndex = this.guitarItem.length-1;
    }
    this.guitarItem[this.imageIndex].visibility = true;
  }

  btnNext(){
    this.guitarItem[this.imageIndex].visibility = false;
    if(this.imageIndex < this.guitarItem.length-1){
      this.imageIndex++;
    }
    else{
      this.imageIndex = 0;
    }
    this.guitarItem[this.imageIndex].visibility = true;
  }

}