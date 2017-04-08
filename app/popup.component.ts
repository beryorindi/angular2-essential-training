import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-popup',
  templateUrl: 'app/popup.component.html',
  styleUrls: ['app/popup.component.css']
})

export class PopUpComponent {
  @Input() imageIndex = 0;
  images = [{path:"media/01.png", visibility : true},{path:"media/02.png",visibility : false}, {path:"media/03.png",visibility : false}, {path:"media/04.png",visibility : false}];
  @Input() mediaItem;
  @Output() preview = new EventEmitter();

  closePreview(){
    this.preview.emit();
  }

  btnPrev(){
    this.images[this.imageIndex].visibility = false;
    if(this.imageIndex > 0){
      this.imageIndex--;
    }
    else{
      this.imageIndex = this.images.length-1;
    }
    this.images[this.imageIndex].visibility = true;
  }

  btnNext(){
    this.images[this.imageIndex].visibility = false;
    if(this.imageIndex < this.images.length-1){
      this.imageIndex++;
    }
    else{
      this.imageIndex = 0;
    }
    this.images[this.imageIndex].visibility = true;
  }

}