import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { environment } from 'src/app/shared/parameters';
import { Range } from '../../shared/interfaces/range';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  constructor(private http:HttpClient) { }

  url = environment.url_api

  header = {
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    Authorization : 'Bearer'

  }

  getInfoProveedores(data:Range){
    let url_api = `${this.url}/plataforma/teleconsultas/fechas-proveedores`
    return this.http.post(url_api,data,{headers:this.header}).pipe(map(data => data));
  }


}
