import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

// A estrutura do Angular é muito organizada, e cada arquivo possui uma habilidade bem definida.
// Portanto, como boa prática de programação, qualquer arquivo com a terminação component.ts deve
// conter apenas a lógica para definição dos comportamentos e possibilitar a renderização dos arquivos na tela.

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamentoFilho: Pensamento = { //o input indica que a propriedade pensamento vai receber as informações do componente pai ListarPensamentosComponent
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Ias',
    modelo: 'modelo3'
  }
  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamentoFilho.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
