import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headers2 = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
  };

  constructor(private http: HttpClient) {}

  getModulos(): any {
    return localStorage.getItem('modulos');
  }


}
