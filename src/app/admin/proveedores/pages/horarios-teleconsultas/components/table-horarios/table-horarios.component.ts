import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-horarios',
  templateUrl: './table-horarios.component.html',
  styleUrls: ['./table-horarios.component.scss']
})
export class TableHorariosComponent {

// input para recibir los horarios
@Input() public sortInfoData: any[] = [];


  public inicio :any ;
  public fin :any ;
  public columsTable: string[] = ['Especialidad','Proveedor','Fecha','Horarios Disponibles'];
  public group: number = 10;
  public search: string = '';
  // public sortInfoData: any[] = [];
  public page!: number;
  public size: number = 0;
  public filterTable: string = '';
}
