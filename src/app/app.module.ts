import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './shared/banner/banner.component';
import { ServicesComponent } from './shared/services/services.component';
import { ReviewComponent } from './shared/review/review.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ServiceComponent } from './pages/service/service.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { DogWalkingComponent } from './pages/dog-walking/dog-walking.component';
import { HospedagemAfetivaComponent } from './pages/hospedagem-afetiva/hospedagem-afetiva.component';
import { PetCareComponent } from './pages/pet-care/pet-care.component';
import { FormWppComponent } from './pages/form-wpp/form-wpp.component';
import { AgendamentoDogWalkingComponent } from './pages/agendamento-dog-walking/agendamento-dog-walking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    ReviewComponent,
    FooterComponent,
    ServiceComponent,
    AboutComponent,
    HomeComponent,
    DogWalkingComponent,
    HospedagemAfetivaComponent,
    PetCareComponent,
    FormWppComponent,
    AgendamentoDogWalkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
