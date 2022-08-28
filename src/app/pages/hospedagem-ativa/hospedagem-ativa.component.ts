import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospedagem-ativa',
  templateUrl: './hospedagem-ativa.component.html',
  styleUrls: ['./hospedagem-ativa.component.scss']
})
export class HospedagemAtivaComponent implements OnInit {
  banner = [
    { title: "Hospedagem Afetiva", subtitle: "Nossa hospedagem é feita mediante agendamento. Com exclusividade para um cliente por vez (considerando a possibilidade de mais de um pet da mesma família), possibilitamos um conforto para o pet e a garantia de supervisão consciente.", check1: "No ambiente, proporcionamos enriquecimentos ambiental, passeios, feedback para o tutor e muito carinho para o dog", check2: "Adaptamos a estadia de acordo com a necessidade do pet, considerando que cada serzinho merece respeito e atenção", check3: "Feedback diário para o tutor. " }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
