import { Component } from '@angular/core';

import { ItemService } from './item.service'

@Component({
  selector: 'yg-guitar-item-list',
  templateUrl: 'app/guitar-item-list.component.html',
  styleUrls: ['app/guitar-item-list.component.css']
})
export class GuitarItemListComponent {

  guitarItems = [];
  category = '';
  media = null;


  constructor (private itemService: ItemService){}
  ngOnInit() {
    this.getGuitarItems(this.category);
  }
  onPreview(guitarItem){
    this.media = guitarItem;
  }

  closePopUp(){
    this.media = null;
  }
  onMediaItemDelete(guitarItem) { 
    this.itemService.delete(guitarItem)
    .subscribe(() => {
      this.getGuitarItems(this.category);
    });
  }

  getGuitarItems(category){
    this.category = category;
    this.itemService.get(category)
    .subscribe(guitarItems => {
      this.guitarItems = guitarItems;
    });
  }

  
}
