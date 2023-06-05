import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

// A estrutura do Angular é muito organizada, e cada arquivo possui uma habilidade bem definida.
// Portanto, como boa prática de programação, qualquer arquivo com a terminação component.ts deve
// conter apenas a lógica para definição dos comportamentos e possibilitar a renderização dos arquivos na tela.

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit { //Componente Pai
  listaPensamentos: Pensamento[] = [];
  constructor(private service: PensamentoService) { }

  ngOnInit(): void { //ciclo de vida do componente
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

}
