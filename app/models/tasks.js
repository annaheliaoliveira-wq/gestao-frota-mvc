class Task {

    constructor(
        titulo,
        descricao,
        dono
    ) {

        this.titulo = titulo;
        this.descricao = descricao;
        this.dono = dono;
        this.concluida = false;

    }

}

class TaskModel {

    constructor() {

        this.tasks = [];

    }

    adicionar(titulo, descricao) {

        const usuario =
        localStorage.getItem(
        "usuarioLogado"
        );

        const tarefa =
        new Task(
            titulo,
            descricao,
            usuario
        );

        this.tasks.push(tarefa);

    }

    listar() {

        return this.tasks;

    }

    concluir(index) {

        const usuario =
        localStorage.getItem(
        "usuarioLogado"
        );

        if(
        this.tasks[index].dono
        !== usuario
        ){

            alert(
            "Você só pode alterar seus próprios registros."
            );

            return;

        }

        this.tasks[index].concluida =
        !this.tasks[index].concluida;

    }

    excluir(index) {

        const usuario =
        localStorage.getItem(
        "usuarioLogado"
        );

        if(
        this.tasks[index].dono
        !== usuario
        ){

            alert(
            "Você só pode excluir seus próprios registros."
            );

            return;

        }

        this.tasks.splice(
            index,
            1
        );

    }

}

window.TaskModel =
TaskModel;
