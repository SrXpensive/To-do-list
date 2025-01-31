document.addEventListener("DOMContentLoaded",function(){
    //Botón
    let anadir = document.getElementById("anadir");
    //Valor que escribimos en el input
    let input = document.getElementById("tarea");
    //Mostrar tareas
    let containerList = document.getElementById("container-list");
    //Lista de tareas
    let lista = [];
    

    //Función para añadir una tarea a la lista
    anadir.addEventListener("click",function(){
        //Limpiamos la pantalla de la lista para que no se acumulen los valores repetidos
        containerList.innerHTML="";
        let tarea = input.value;
        //Añadimos la tarea a la lista
        lista.push(tarea);
        //Recorremos la lista, creando para cada tarea un div, y lo mostramos en su contenedor
        for(let i=0; i<lista.length; i++){
            let celda = document.createElement("div");
            let texto = document.createElement("div");
            celda.classList.add("tarea");
            texto.classList.add("blanco");
            texto.innerHTML = lista[i];
            celda.appendChild(texto);
            containerList.appendChild(celda);
        }
        //Aquí limpiamos el input, volviendo a poner el valor "string vacío"
        input.value="";
    })

    
})