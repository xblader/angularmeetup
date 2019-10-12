import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Item } from './Item';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {

  }

  getListaMeetup(): Observable<Item> {
    return from([{ id: 1, descricao: "Item1" }, { id: 2, descricao: "Item2" }, { id: 3, descricao: "Item3" }]);
  }

  getJSON(){
    return this.http.get('/api/v1/item');
  }
}