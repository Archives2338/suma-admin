import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from './shared/shared.module';
// import { SharedModule as SharedGeneral} from "../shared/shared.module"

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,

  ],
  exports: [SharedModule]

})
export class AdminModule { }
