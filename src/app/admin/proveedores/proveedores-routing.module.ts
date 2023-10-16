import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorariosTeleconsultasComponent } from './pages/horarios-teleconsultas/horarios-teleconsultas.component';

const routes: Routes = [{
  path: 'horario-teleconsultas',
  component: HorariosTeleconsultasComponent,
  pathMatch: 'full'
}];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
