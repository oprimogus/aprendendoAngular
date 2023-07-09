import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  textNormal: string = 'Passe o mouse sobre mim!'
  textExibido: string = this.textNormal
  valorAtual: string = ''
  valorSalvo: string = ''
  isMouseOver: boolean = false
  constructor(){ }
  onclick() {
    alert('Fui clicado caraleo!')

  }
  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }
  salvarValor(valor: string) {
    this.valorSalvo = valor

  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
    this.textExibido = this.textNormal
    if (this.isMouseOver) {
      this.textExibido = 'SAI DE CIMA DE MIM CARALHO!!!'
    }
  }

}
