import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { HorariosTeleconsultasComponent } from './pages/horarios-teleconsultas/horarios-teleconsultas.component';
import { SharedModule } from '../shared/shared.module';
import { TableHorariosComponent } from './pages/horarios-teleconsultas/components/table-horarios/table-horarios.component';


@NgModule({
  declarations: [
    HorariosTeleconsultasComponent,
    TableHorariosComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    SharedModule
  ]
})
export class ProveedoresModule { }
