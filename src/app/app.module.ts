import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { RegisterComponent } from './register/register.component';
import { StepperComponent } from './register/stepper/stepper.component';

@NgModule({
  declarations: [
    AgendaComponent,
    AppComponent,
    LocationComponent,
    SideNavComponent,
    SpeakersComponent,
    ToolbarComponent,
    RegisterComponent,
    StepperComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
