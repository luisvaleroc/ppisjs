import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  showBrand(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');

  }
}
