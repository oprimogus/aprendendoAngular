import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent {

  constructor() {
  }

  nome: string = 'abc';
  pessoa: any = {
    nome: 'Gustavo',
    idade: 21
  }

}
