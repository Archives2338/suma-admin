import { Component } from '@angular/core';
import { AtencionService } from '../../services/atencion.service';
import { Range } from 'src/app/admin/shared/interfaces/range';

@Component({
  selector: 'app-teleconsultas',
  templateUrl: './teleconsultas.component.html',
  styleUrls: ['./teleconsultas.component.scss']
})
export class TeleconsultasComponent {

  public siniestros: any[] = [];
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
        console.log(this.siniestros);

      }

    } else {
        console.warn('No se encontraron datos');
    }
  });

 }


}
