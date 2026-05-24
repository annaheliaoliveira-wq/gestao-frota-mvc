alert("JavaScript funcionando");

alert(typeof TaskModel);

alert(typeof View);

alert(typeof Controller);

const model = new TaskModel();

const view = new View();

window.controller =
new Controller(
model,
view
);

const botao =
document.getElementById(
"btnAdicionar"
);

botao.onclick =
function(){

controller.adicionar();

};
