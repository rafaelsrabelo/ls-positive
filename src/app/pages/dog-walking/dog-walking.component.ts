import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-walking',
  templateUrl: './dog-walking.component.html',
  styleUrls: ['./dog-walking.component.scss']
})
export class DogWalkingComponent implements OnInit {
  banner = [
    { title: "Dog Walking", subtitle: " Esse é o momento de lazer e gasto energético do pet. Oferecemos a opção de passeios em 30 minutos ou 50 minutos. Com manejo baseado na metodologia positiva, personalizamos o passeio de acordo com as necessidades do pet", check1: "Momento de interação, sociabilização e exploração dos instintos naturais do dog", check2: "Exclusividade para um cliente por vez (considerando a possibilidade de passeios duplos ou triplos da mesma família)", check3: "Feedback para o tutor com a rota percorrida, relatório descritivo e fotinhas fofas do pet" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
