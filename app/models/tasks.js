class Task {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }
}

class TaskModel {

    constructor() {
        this.tasks = [];
    }

    adicionar(titulo, descricao) {
        const tarefa =
        new Task(
            titulo,
            descricao
        );

        this.tasks.push(tarefa);
    }

    listar() {
        return this.tasks;
    }

    concluir(index) {

        this.tasks[index].concluida =
        !this.tasks[index].concluida;

    }

    excluir(index) {

        this.tasks.splice(index,1);

    }

}

window.TaskModel = TaskModel;
