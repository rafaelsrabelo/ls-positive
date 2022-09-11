import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

interface Turn {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  foods: Food[] = [
    { value: 'pet-0', viewValue: '1 pet' },
    { value: 'pet-1', viewValue: '2 pets' },
    { value: 'pet-2', viewValue: '3 pets' },
  ];

  turns: Turn[] = [
    { value: 'pet-0', viewValue: 'MANHÃ (ENTRE 6H E 9H)' },
    { value: 'pet-1', viewValue: 'TARDE (ENTRE 15H E 19H)' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
