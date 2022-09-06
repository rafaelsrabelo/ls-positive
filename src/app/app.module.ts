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
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './shared/slider/slider.component';
import { DogWalkingComponent } from './pages/dog-walking/dog-walking.component';
import { BannerServiceComponent } from './shared/banner-service/banner-service.component';
import { HospedagemAtivaComponent } from './pages/hospedagem-ativa/hospedagem-ativa.component';
import { PetCareComponent } from './pages/pet-care/pet-care.component';
import { PetSitterComponent } from './pages/pet-sitter/pet-sitter.component';
import { ButtonBackComponent } from './shared/button-back/button-back.component';
import { FormComponent } from './pages/form/form.component';
import { FormsComponent } from './shared/forms/forms.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    ReviewComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    SliderComponent,
    DogWalkingComponent,
    BannerServiceComponent,
    HospedagemAtivaComponent,
    PetCareComponent,
    PetSitterComponent,
    ButtonBackComponent,
    FormComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
