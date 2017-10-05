import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdCardModule,  
  MdIconModule,
  MdListModule,
  MdRadioModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';

const CommonModules = [
  MdButtonModule,
  MdCardModule,  
  MdIconModule,
  MdListModule,
  MdRadioModule,
  MdSidenavModule,
  MdSlideToggleModule,
  MdTabsModule,
  MdToolbarModule
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
