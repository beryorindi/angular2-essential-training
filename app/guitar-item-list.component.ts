import { Component } from '@angular/core';

@Component({
  selector: 'yg-guitar-item-list',
  templateUrl: 'app/guitar-item-list.component.html',
  styleUrls: ['app/guitar-item-list.component.css']
})
export class GuitarItemListComponent {

  media = null;
  onPreview(guitarItem){
    this.media = guitarItem;
  }

  closePopUp(){
    this.media = null;
  }
  onMediaItemDelete(mediaItem) { 
  
  }

  guitarItems = [
    {
      id: 1,
      name: "APX 123",
      subcategory: "APX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/apx.jpg", visibility:true}, {path: "./media/apx.jpg", visibility : false}],
      isFavorite: false
    },
   {
      id: 2,
      name: "CPX 123",
      subcategory: "CPX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/cpx.jpg", visibility:true}, {path: "./media/cpx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 3,
      name: "CGX 123",
      subcategory: "CGX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/cgx.jpg", visibility:true}, {path: "./media/cgx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 4,
      name: "NX 123",
      subcategory: "NX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/nx.jpg", visibility:true}, {path: "./media/nx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 5,
      name : "RGX 123",
      subcategory: "RGX Series",
      category: "Electric Guitar",
      image : [{path : "./media/rgx.jpg", visibility:true}, {path: "./media/rgx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 6,
      name : "Pacifica 123",
      subcategory: "Pacifica Series ",
      category: "Electric Guitar",
      image : [{path : "./media/pacifica.jpg", visibility:true}, {path: "./media/pacifica.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 7,
      name: "APX 123",
      subcategory: "APX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/apx.jpg", visibility:true}, {path: "./media/apx.jpg", visibility : false}],
      isFavorite: false
    },
   {
      id: 8,
      name: "CPX 123",
      subcategory: "CPX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/cpx.jpg", visibility:true}, {path: "./media/cpx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 9,
      name: "CGX 123",
      subcategory: "CGX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/cgx.jpg", visibility:true}, {path: "./media/cgx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 10,
      name: "NX 123",
      subcategory: "NX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/nx.jpg", visibility:true}, {path: "./media/nx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 11,
      name : "RGX 123",
      subcategory: "RGX Series",
      category: "Electric Guitar",
      image : [{path : "./media/rgx.jpg", visibility:true}, {path: "./media/rgx.jpg", visibility : false}],
      isFavorite: false,
    },
    {
      id: 12,
      name : "Pacifica 123",
      subcategory: "Pacifica Series ",
      category: "Electric Guitar",
      image : [{path : "./media/pacifica.jpg", visibility:true}, {path: "./media/pacifica.jpg", visibility : false}],
      isFavorite: false,
    }
  ];
}
