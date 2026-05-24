class Controller {

    constructor(model,view){

        this.model=model;
        this.view=view;

    }

    adicionar(){

        const titulo =
        document.getElementById(
        "titulo").value;

        const descricao =
        document.getElementById(
        "descricao").value;

        this.model.adicionar(
            titulo,
            descricao
        );

        this.atualizar();

    }

    concluir(index){

        this.model.concluir(index);

        this.atualizar();

    }

    excluir(index){

        this.model.excluir(index);

        this.atualizar();

    }

    atualizar(){

        this.view.renderizar(
            this.model.listar()
        );

    }

}

window.Controller = Controller;
