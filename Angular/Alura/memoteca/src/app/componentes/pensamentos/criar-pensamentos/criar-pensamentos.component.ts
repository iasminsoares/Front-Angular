import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

// A estrutura do Angular é muito organizada, e cada arquivo possui uma habilidade bem definida.
// Portanto, como boa prática de programação, qualquer arquivo com a terminação component.ts deve
// conter apenas a lógica para definição dos comportamentos e possibilitar a renderização dos arquivos na tela.

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {
  pensamento : Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
}
  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  cancelarPensamento(){
    this.router.navigate(['/listarPensamento']);
  }

}
