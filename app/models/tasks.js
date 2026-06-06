class Task {

    constructor(
        id,
        titulo,
        descricao,
        dono
    ) {

        this.id = id;
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
            Date.now(),
            titulo,
            descricao,
            usuario
        );

        this.tasks.push(tarefa);

    }

    listar() {

        return this.tasks;

    }

    buscarPorId(id) {

        return this.tasks.find(
            task => task.id == id
        );

    }

    alterar(id) {

        const usuario =
        localStorage.getItem(
        "usuarioLogado"
        );

        const tarefa =
        this.buscarPorId(id);

        if (!tarefa) {

            alert(
            "Registro não encontrado."
            );

            return;

        }

        if (
        tarefa.dono !== usuario
        ) {

            alert(
            "Você só pode alterar seus próprios registros."
            );

            return;

        }

        const novoTitulo =
        prompt(
        "Novo título:",
        tarefa.titulo
        );

        const novaDescricao =
        prompt(
        "Nova descrição:",
        tarefa.descricao
        );

        if (
        novoTitulo &&
        novaDescricao
        ) {

            tarefa.titulo =
            novoTitulo;

            tarefa.descricao =
            novaDescricao;

        }

    }

    concluir(index) {

        const usuario =
        localStorage.getItem(
        "usuarioLogado"
        );

        if (
        this.tasks[index].dono
        !== usuario
        ) {

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

        if (
        this.tasks[index].dono
        !== usuario
        ) {

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
        
