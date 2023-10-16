import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [{
   path: '',
   component: AdminComponent,
   children: [
    {path: 'atencion', loadChildren: () => import('./atencion/atencion.module').then(m => m.AtencionModule)},
    {path: 'proveedores', loadChildren: () => import('./proveedores/proveedores.module').then(m => m.ProveedoresModule)},
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
