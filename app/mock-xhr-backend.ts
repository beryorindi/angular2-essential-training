import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
  constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('guitarItems?category=') >= 0 || request.url === 'guitarItems') {
            var category;
            if (request.url.indexOf('?') >= 0) {
              category = request.url.split('=')[1];
              if (category === 'undefined') category = '';
            }
            var guitarItems;
            if (category) {
              guitarItems = this._guitarItems.filter(guitarItem => guitarItem.category === category);
            } else {
              guitarItems = this._guitarItems;
            }
            responseOptions = new ResponseOptions({
              body: { guitarItems: JSON.parse(JSON.stringify(guitarItems)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            guitarItems = this._guitarItems.filter(guitarItem => guitarItem.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(guitarItems[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var guitarItem = JSON.parse(request.text().toString());
          guitarItem.id = this._getNewId();
          this._guitarItems.push(guitarItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deleteguitarItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deleteguitarItem(id) {
    var guitarItem = this._guitarItems.find(guitarItem => guitarItem.id === id);
    var index = this._guitarItems.indexOf(guitarItem);
    if (index >= 0) {
      this._guitarItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._guitarItems.length > 0) {
      return Math.max.apply(Math, this._guitarItems.map(guitarItem => guitarItem.id)) + 1;
    }
  }

  _guitarItems = [
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