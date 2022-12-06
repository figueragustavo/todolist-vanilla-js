// colocá las declaraciones acá
let listaDeTareas = [];
let inputTarea = document.getElementById("task").value;
let inputPrioridad = document.querySelector("#prioridad").value;
let ul = document.querySelector("#lista-de-tareas");
let htmlCode = ``;
//let index=1;


//declaramos el class Tarea

 class Tarea{
    constructor(nombre,prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    agregarTarea(array){
        let tarea = new Tarea(this.nombre, this.prioridad);
        array.push(tarea);
    }


 }

 const mostraList = () =>listaDeTareas.forEach((tarea, index) => {
    htmlCode =
          htmlCode + `
                    <li class="list-group-item d-flex justify-content-between align-items-center" id = "${index}">
                    ${tarea.nombre} - Prioridad: ${tarea.prioridad}
                    <i class="far fa-times-circle" onclick="eliminar(event)"></i>
                    </li>
                  `;
        ul.innerHTML = htmlCode; 
  });

  const todoList = () => {
    inputTarea = document.getElementById("task").value;
    inputPrioridad = document.querySelector("#prioridad").value
    let tarea = new Tarea(inputTarea,inputPrioridad);
    tarea.agregarTarea(listaDeTareas);
    mostraList();
    htmlCode = ``;
    document.getElementById("task").value = "";
  }


  function eliminar(e){
   let id = e.target.parentElement.id;
   console.log(id);
   listaDeTareas.splice(id,1);
   ul.innerHTML="";
   console.log(listaDeTareas);
   htmlCode = ``;
   mostraList();
  }





