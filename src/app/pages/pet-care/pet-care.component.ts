import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-care',
  templateUrl: './pet-care.component.html',
  styleUrls: ['./pet-care.component.scss']
})
export class PetCareComponent implements OnInit {
  banner = [
    { title: "Pet Care para Eventos", subtitle: "Acompanhamos os animais de estimação em casamentos, formaturas, aniversários e outros eventos importantes para o tutor. De forma personalizada, proporcionamos segurança e conforto tanto para o pet quanto para o cliente", check1: "Com manejo positivo, cuidamos do pet no evento e possibilitamos a presença dele na hora das fotos com a família", check2: "Entregamos fotos e vídeos do pet aos tutores para recordação.", check3: "Disponibilizamos o taxi pet para o deslocamento ao local do evento.", check4: "Caso necessário, reservamos a hospedagem para que ele possa descansar em um ambiente seguro e familiar enquanto os tutores aproveitam o evento despreocupados" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
