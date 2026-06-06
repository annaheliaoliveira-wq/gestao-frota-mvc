class Controller {

    constructor(model, view){

        this.model = model;
        this.view = view;

    }

    adicionar(){

        const usuario =
        localStorage.getItem(
        "usuarioLogado"
        );

        if(!usuario){

            alert(
            "Faça login primeiro."
            );

            window.location.href =
            "login.html";

            return;
        }

        const titulo =
        document.getElementById(
        "titulo"
        ).value;

        const descricao =
        document.getElementById(
        "descricao"
        ).value;

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

    alterar(id){

        this.model.alterar(id);

        this.atualizar();

    }

    buscarPorId(){

        const id =
        prompt(
        "Digite o ID:"
        );

        const tarefa =
        this.model.buscarPorId(id);

        if(tarefa){

            alert(

            "ID: " + tarefa.id +
            "\nTítulo: " + tarefa.titulo +
            "\nDescrição: " + tarefa.descricao

            );

        }else{

            alert(
            "Registro não encontrado."
            );

        }

    }

    atualizar(){

        this.view.renderizar(
            this.model.listar()
        );

    }

}

window.Controller =
Controller;
