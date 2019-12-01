import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoresService {
  public store = {
    name: '',
    address: '',
    brand_id: 1
  };

  

  constructor(private http: HttpClient) { }

  showStores(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/stores');

  }

  agregaStore(store) {
    let json = JSON.stringify(store);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://127.0.0.1:8000/api/stores', json, {headers: headers});

  }

  eliminaStore(id): Observable<any> {
   return this.http.delete('http://127.0.0.1:8000/api/stores/'+id);
  }

  
}
