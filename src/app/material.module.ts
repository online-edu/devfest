import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule,
  MatTabsModule
} from '@angular/material';

const CommonModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    CommonModule,
    ...CommonModules
  ],
  exports: [
    ...CommonModules
  ],
  declarations: []
})
export class MaterialModule { }
