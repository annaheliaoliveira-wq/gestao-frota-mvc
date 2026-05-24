class View {

    renderizar(tasks){

        const lista =
        document.getElementById("lista");

        lista.innerHTML="";

        tasks.forEach((task,index)=>{

            lista.innerHTML += `

            <li>

            ${task.titulo}
            - ${task.descricao}

            ${task.concluida ?
            "✔ Concluída" :
            "Pendente"}

            <button onclick=
            "controller.concluir(${index})">

            Concluir

            </button>

            <button onclick=
            "controller.excluir(${index})">

            Excluir

            </button>

            </li>
            `;
        });

    }

}

window.View = View;
