import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeleconsultasComponent } from './pages/teleconsultas/teleconsultas.component';

const routes: Routes = [{
  path: 'teleconsultas',
  component: TeleconsultasComponent,

  pathMatch: 'full'

},


{ path: '', redirectTo: 'teleconsultas', pathMatch: 'full'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtencionRoutingModule { }
