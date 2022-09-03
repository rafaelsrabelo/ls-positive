import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  name: string = "rafael"

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: any) {
    alert(form.value)
  }

}
