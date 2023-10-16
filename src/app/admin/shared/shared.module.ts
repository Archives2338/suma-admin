import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { RouterModule } from '@angular/router';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DrawerMenuComponent } from './components/drawer-menu/drawer-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltroComponent } from './components/filtro/filtro.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundSearchComponent } from './components/not-found-search/not-found-search.component';


const components = [

  DrawerMenuComponent,
  HeaderComponent,
  FiltroComponent,
  LoaderComponent,
  NotFoundSearchComponent
]

const mat_modules = [
  MatMenuModule,
  MatIconModule,
  MatExpansionModule,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatPaginatorModule,
  MatSelectModule,
  MatSortModule,
  MatDialogModule,
  MatCheckboxModule,
  MatStepperModule,
  MatRadioModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatDividerModule,
  MatTabsModule,
  MatSidenavModule,
  MatSlideToggleModule,
  NgxPaginationModule
];
@NgModule({
  declarations: [
    components,
    FiltroComponent,
    LoaderComponent,
    NotFoundSearchComponent
  ],
  imports: [
    CommonModule,
    mat_modules
  ],
  exports: [ mat_modules, components ]
})
export class SharedModule { }
