class View {

    renderizar(tasks){

        const lista =
        document.getElementById("lista");

        lista.innerHTML = "";

        tasks.forEach((task,index)=>{

            lista.innerHTML += `

            <li>

            <strong>${task.titulo}</strong>

            <br>

            ${task.descricao}

            <br>

            Responsável:
            ${task.dono}

            <br>

            Status:
            ${task.concluida ?
            "✔ Concluída" :
            "Pendente"}

            <br><br>

            <button onclick=
            "controller.concluir(${index})">

            Concluir

            </button>

            <button onclick=
            "controller.excluir(${index})">

            Excluir

            </button>

            <hr>

            </li>

            `;
        });

    }

}

window.View = View;
