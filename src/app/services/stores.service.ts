import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoresService {
  public store = {
    id: null,
    name: '',
    address: '',
    brand_id: 1
  };

  

  constructor(private http: HttpClient) { }

  showStores(): Observable<any> {
    return this.http.get('http://18.189.2.155/api/stores');

  }

  agregaStore(store) {
    let json = JSON.stringify(store);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post('http://18.189.2.155/api/stores', json, {headers: headers});

  }

  eliminaStore(id): Observable<any> {
   return this.http.delete('http://18.189.2.155/api/stores/'+id);
  }

  editaStore(store){
    let json = JSON.stringify(store);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.put('http://18.189.2.155/api/stores/'+store.id, json, {headers: headers});
    

  }
  
}
