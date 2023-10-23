import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionRoutingModule } from './atencion-routing.module';
import { TeleconsultasComponent } from './pages/teleconsultas/teleconsultas.component';
import { SharedModule } from "../shared/shared.module";
import { TableSiniestrosComponent } from './pages/teleconsultas/components/table-siniestros/table-siniestros.component';
import { ModalEstadoSiniestrosComponent } from './pages/modal-estado-siniestros/modal-estado-siniestros.component';


@NgModule({
    declarations: [
        TeleconsultasComponent,
        TableSiniestrosComponent,
        ModalEstadoSiniestrosComponent
    ],
    imports: [
        CommonModule,
        AtencionRoutingModule,
        SharedModule
    ]
})
export class AtencionModule { }
