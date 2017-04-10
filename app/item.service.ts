import { Injectable } from '@angular/core';
import { Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemService {
  constructor(private http: Http){}

  get(category) {
    let searchParams = new URLSearchParams();
    searchParams.append('category', category);
    return this.http.get('guitarItems', { search : searchParams })
    .map(response =>{
      return response.json().guitarItems;
    });
  }
  
  add(guitarItem) {
    return this.http.post('guitarItems', guitarItem)
    .map(response => {});
    
  }
  
  delete(guitarItem) {
    return this.http.delete(`guitarItems/${guitarItem.id}`)
    .map(response => {});
  }

  
}