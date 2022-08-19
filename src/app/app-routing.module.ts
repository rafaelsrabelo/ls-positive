import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DogWalkingComponent } from './pages/dog-walking/dog-walking.component';
import { HospedagemAfetivaComponent } from './pages/hospedagem-afetiva/hospedagem-afetiva.component';
import { PetCareComponent } from './pages/pet-care/pet-care.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'dog-walking', component: DogWalkingComponent },
  { path: 'hospedagem-afetiva', component: HospedagemAfetivaComponent },
  { path: 'pet-care', component: PetCareComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
