import { Component } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { Range } from 'src/app/admin/shared/interfaces/range';
import { Horarios } from '../../interfaces/horarios';
@Component({
  selector: 'app-horarios-teleconsultas',
  templateUrl: './horarios-teleconsultas.component.html',
  styleUrls: ['./horarios-teleconsultas.component.scss']
})
export class HorariosTeleconsultasComponent {
  public sortInfoData: Horarios[] = [];
  constructor(private services:ProveedoresService) { }


  searchByRange(event: Range): void {
    // console.log(event);
    this.InfoProveedores(event)
  }

   InfoProveedores(data:Range){
    this.services.getInfoProveedores(data).subscribe((data: any) => {
      if (data) {
        if(data.length > 0){
          for (let index = 0; index < data.length; index++) {
            data[index].horarios = MetodoOrdenarArregloHorarioString(data[index].horarios)
          }

          this.sortInfoData = data;
        }else{
          this.sortInfoData = [];
        }

      } else {
          console.warn('No se encontraron datos');
      }
    });

   }



}
function MetodoOrdenarArregloHorarioString(data:any){
  let arrayhorarios = data
  let arrayhorariosOrdenado = arrayhorarios.sort(function (a:any, b:any) {
    if (a.hora < b.hora) {
      return -1;
    }
    if (a.hora > b.hora) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  );
  // si  el horario es menor a las 12:00 ponemos que es turno: mañana
  for (let index = 0; index < arrayhorariosOrdenado.length; index++) {
    if(arrayhorariosOrdenado[index].hora < "12:00"){
      arrayhorariosOrdenado[index].turno = "Mañana"
    }else{
      arrayhorariosOrdenado[index].turno = "Tarde"
    }
  }


  return arrayhorariosOrdenado
}
