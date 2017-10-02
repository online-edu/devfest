import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdToolbarModule,
  MdSidenavModule,
  MdListModule,
  MdIconModule,
  MdCardModule,
  MdTabsModule
} from '@angular/material';

const CommonModules = [MdButtonModule, MdToolbarModule, MdSidenavModule, MdListModule, MdIconModule, MdCardModule, MdTabsModule];

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
