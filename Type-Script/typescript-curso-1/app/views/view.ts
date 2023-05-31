export abstract class View<TipoGenerico> {

    protected elemento: HTMLElement;
    private escapar = false;

    //protected -> na herança, somente as filhas tem acesso
    //private -> na herança, somente o pai tem acesso
    //public -> na herança, todos tem acesso
    
    //Tipo genérico -> é defindo pela classe filha
    //classe abstrata -> não permite criar uma instância direta, 
        // somente se o filho herda dessa classe e cria uma instancia do filho. 
        // e pode ter nenhum ou vários métodos abstratos.
    //método abstrato -> é o método que a classe pai não sabe como será implementado, será responsabilidade da classe filha definir.
    //método statico ->  pode ser chamado diretamente na classe sem precisar criar uma instancia

    constructor(seletor: string, escapar?: boolean){
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLInputElement;
        } else{
            throw Error(`Seletor ${seletor} é null no DOM. Verifique!` )
        }
        if(escapar){
            this.escapar = escapar;
        }
    }

    protected abstract template(model: TipoGenerico): string ;

    public update(model: TipoGenerico): void{
        let template = this.template(model);
            if(this.escapar){
                template = template.replace(/<script>[\s\S]*?<\/script>/, '')
            }
        this.elemento.innerHTML = template;

    }
}