import { Component } from '@angular/core';

@Component({
  selector: 'app-teleconsultas',
  templateUrl: './teleconsultas.component.html',
  styleUrls: ['./teleconsultas.component.scss']
})
export class TeleconsultasComponent {


 searchByRange(event: any): void {
   console.log(event);
 }


}
