import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DogWalkingComponent } from './pages/dog-walking/dog-walking.component';
import { PetCareComponent } from './pages/pet-care/pet-care.component';
// import { FormWppComponent } from './pages/form-wpp/form-wpp.component';
// import { AgendamentoDogWalkingComponent } from './pages/agendamento-dog-walking/agendamento-dog-walking.component';
import { PetSitterComponent } from './pages/pet-sitter/pet-sitter.component';
import { HospedagemAtivaComponent } from './pages/hospedagem-ativa/hospedagem-ativa.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: AboutComponent },
  { path: 'dog-walking', component: DogWalkingComponent },
  { path: 'hospedagem-afetiva', component: HospedagemAtivaComponent },
  { path: 'pet-care', component: PetCareComponent },
  // { path: 'wpp', component: FormWppComponent },
  // { path: 'agendamento-dog-walking', component: AgendamentoDogWalkingComponent },
  { path: 'pet-sitter', component: PetSitterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
