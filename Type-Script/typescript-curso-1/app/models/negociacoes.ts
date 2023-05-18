import { Negociacao } from './negociacao.js';

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []; //OU Negociacao[] = []

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao); //push add itens na lista
    }

    lista(): ReadonlyArray<Negociacao> { //OU só readonly define que a lista é somente leitura
        return this.negociacoes;
    }
}
