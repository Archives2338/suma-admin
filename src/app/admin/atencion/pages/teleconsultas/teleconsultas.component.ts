import { Component } from '@angular/core';
import { AtencionService } from '../../services/atencion.service';
import { Range } from 'src/app/admin/shared/interfaces/range';
import { Siniestros } from 'src/app/admin/proveedores/interfaces/horarios';

@Component({
  selector: 'app-teleconsultas',
  templateUrl: './teleconsultas.component.html',
  styleUrls: ['./teleconsultas.component.scss']
})
export class TeleconsultasComponent {

  public siniestros: Array<Siniestros> | any = [];
  public siniestros2: Array<Siniestros> | any = [];
  constructor(private services:AtencionService) { }

 searchByRange(event: Range): void {
   console.log(event);
   this.getSiniestrosSuma(event)
 }

 getSiniestrosSuma(data:Range){
  this.services.getSiniestrosSuma(data).subscribe((data: any) => {
    if (data) {

      if(data.length > 0){
        // console.log(data);
        this.siniestros = data;
        this.siniestros2 = this.siniestros
        console.log(this.siniestros);
        console.log(this.siniestros2);
      }

    } else {
        console.warn('No se encontraron datos');
    }
  });

 }


}
