import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AgendaComponent } from "./agenda/agenda.component";
import { SpeakersComponent } from "./speakers/speakers.component";
import { LocationComponent } from "./location/location.component";

const routes: Routes = [
    { path: '', redirectTo: '/agenda', pathMatch: 'full' },
    { path: 'agenda', component: AgendaComponent },
    { path: 'location', component: LocationComponent },
    { path: 'speakers', component: SpeakersComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }