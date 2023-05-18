export class Negociacao {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    // Se no construtor da sua classe você coloca o modificador private, explicita isso, ou public, isso indica para o 
    // TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o mesmo nome do 
    // seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, vai pegar esse valor e vai jogar lá para você.

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;

        //toda vez que eu acesso é um getter, ele está me retornando uma nova data, ele não vai modificar a minha data que está armazenada dentro da minha modelagem de negociação.
        //Esse getTime de uma data retorna a data em milissegundos, num número gigante. 
        //E o construtor de date é inteligente o suficiente que se você passar o valor de getTime para ele, ele sabe criar uma data a partir desse time desta data.
    }
}