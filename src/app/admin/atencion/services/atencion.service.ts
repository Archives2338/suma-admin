import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/app/shared/parameters';
@Injectable({
  providedIn: 'root'
})
export class AtencionService {

  constructor(private http:HttpClient) { }

  url = environment.url_api

  header = {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    Authorization : 'Bearer'

  }



}
