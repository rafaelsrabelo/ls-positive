import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-sitter',
  templateUrl: './pet-sitter.component.html',
  styleUrls: ['./pet-sitter.component.scss']
})
export class PetSitterComponent implements OnInit {
  banner = [
    { title: "Pet Sitter", subtitle: "Utilizando o manejo positivo, os cuidados à domicílio são uma ótimo opção para gatos e pets em geral. Proporcionamos enriquecimento ambiental, higienização do local do pet, brincadeiras, reposição de ração e água, feedback para o tutor e passeios (à combinar)", check1: "1 Hora de visita", check2: "Desenvolvimento cognitivo para o pet", check3: "Gasto energético (possibilidade de passeios)", check4: "Limpeza de dejetos", check5: "Feedback para o tutor" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
