import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { SpeakersComponent } from "./speakers/speakers.component";
import { LocationComponent } from "./location/location.component";

@NgModule({
  declarations: [
    AgendaComponent,
    AppComponent,
    LocationComponent,
    SideNavComponent,
    SpeakersComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
