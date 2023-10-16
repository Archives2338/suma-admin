import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared/shared.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  constructor(private shared_service: SharedService) {}

  public clase: string = 'max';

  public modulos: any = [
    {
        "id": 1,
        "name": "Proveedores",
        "views": [
            {
                "id": 1,
                "name": "Horario de Teleconsulta"
            },
            {
                "id": 2,
                "name": "Medicos"
            }
        ]
    },
    {
        "id": 8,
        "name": "Atencion",
        "views": [
            {
                "id": 13,
                "name": "Teleconsultas"
            }
        ]
    }
]

  ngOnInit(): void {

    // this.modulos = JSON.parse(this.shared_service.getModulos());
  }

  oyc(s: string): void {
    if (s == 'opened') {
      this.clase = 'max';
    } else {
      this.clase = 'min';
    }}





  class(): string {
    return this.clase;
  }
}
