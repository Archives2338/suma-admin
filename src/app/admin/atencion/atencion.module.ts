import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionRoutingModule } from './atencion-routing.module';
import { TeleconsultasComponent } from './pages/teleconsultas/teleconsultas.component';
import { SharedModule } from "../shared/shared.module";
import { TableSiniestrosComponent } from './pages/teleconsultas/components/table-siniestros/table-siniestros.component';


@NgModule({
    declarations: [
        TeleconsultasComponent,
        TableSiniestrosComponent
    ],
    imports: [
        CommonModule,
        AtencionRoutingModule,
        SharedModule
    ]
})
export class AtencionModule { }
