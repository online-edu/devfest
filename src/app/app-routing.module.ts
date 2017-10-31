import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AgendaComponent } from "./agenda/agenda.component";
import { LocationComponent } from "./location/location.component";
import { RegisterComponent } from "./register/register.component";
import { SpeakersComponent } from "./speakers/speakers.component";

const routes: Routes = [
    { path: '', redirectTo: '/agenda', pathMatch: 'full' },
    { path: 'agenda', component: AgendaComponent },
    { path: 'location', component: LocationComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'speakers', component: SpeakersComponent }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }