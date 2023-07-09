import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  url: string = 'http://loiane.com'
  urlImagem: string = 'http://lorempixel.com.br/500/400/?2'
  cursoAngular: boolean = true;
  nomeCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  onMudouValor(evento: {novoValor: number}) {
    console.log(evento.novoValor)
  }

  constructor() {
  }

}
