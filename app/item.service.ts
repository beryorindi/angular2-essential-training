export class ItemService {
  get() {
    return this.guitarItems;
  }
  
  add(guitarItem) {
    this.guitarItems.push(guitarItem);
  }
  
  delete(guitarItem) {
    let index = this.guitarItems.indexOf(guitarItem);
    if(index >= 0) {
      this.guitarItems.splice(index, 1);
    }
  }

  guitarItems = [
    {
      id: 1,
      name: "APX 123",
      subcategory: "APX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/apx.jpg", visibility:true}, {path: "./media/apx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
   {
      id: 2,
      name: "CPX 123",
      subcategory: "CPX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/cpx.jpg", visibility:true}, {path: "./media/cpx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 3,
      name: "CGX 123",
      subcategory: "CGX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/cgx.jpg", visibility:true}, {path: "./media/cgx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 4,
      name: "NX 123",
      subcategory: "NX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/nx.jpg", visibility:true}, {path: "./media/nx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 5,
      name : "RGX 123",
      subcategory: "RGX Series",
      category: "Electric Guitar",
      image : [{path : "./media/rgx.jpg", visibility:true}, {path: "./media/rgx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 6,
      name : "Pacifica 123",
      subcategory: "Pacifica Series ",
      category: "Electric Guitar",
      image : [{path : "./media/pacifica.jpg", visibility:true}, {path: "./media/pacifica.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 7,
      name: "APX 123",
      subcategory: "APX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/apx.jpg", visibility:true}, {path: "./media/apx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
   {
      id: 8,
      name: "CPX 123",
      subcategory: "CPX Series",
      category: "Acoustic Guitar",
      image : [{path : "./media/cpx.jpg", visibility:true}, {path: "./media/cpx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 9,
      name: "CGX 123",
      subcategory: "CGX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/cgx.jpg", visibility:true}, {path: "./media/cgx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 10,
      name: "NX 123",
      subcategory: "NX Series",
      category: "Classical Nylon Guitar",
      image : [{path : "./media/nx.jpg", visibility:true}, {path: "./media/nx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 11,
      name : "RGX 123",
      subcategory: "RGX Series",
      category: "Electric Guitar",
      image : [{path : "./media/rgx.jpg", visibility:true}, {path: "./media/rgx.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    },
    {
      id: 12,
      name : "Pacifica 123",
      subcategory: "Pacifica Series ",
      category: "Electric Guitar",
      image : [{path : "./media/pacifica.jpg", visibility:true}, {path: "./media/pacifica.jpg", visibility : false}],
      description : "This guitar made from great mahoni with great nylon ",
      price : "2000000"
    }
  ];
}