import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DogWalkingComponent } from './pages/dog-walking/dog-walking.component';
import { PetCareComponent } from './pages/pet-care/pet-care.component';
import { PetSitterComponent } from './pages/pet-sitter/pet-sitter.component';
import { HospedagemAtivaComponent } from './pages/hospedagem-ativa/hospedagem-ativa.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nos', component: AboutComponent },
  { path: 'dog-walking', component: DogWalkingComponent },
  { path: 'hospedagem-afetiva', component: HospedagemAtivaComponent },
  { path: 'pet-care', component: PetCareComponent },
  { path: 'pet-sitter', component: PetSitterComponent },
  { path: 'agendamento', component: FormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
