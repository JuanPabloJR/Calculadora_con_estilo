const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn'); //El querySelectorAll es porque llamamos todos los botones

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent; //(textContent) contenido textual del boton

        if (boton.id === "c") {  //boton.id es para "llamarlo"
            pantalla.textContent = "0";
            return; //Para que esta función termine aquí cuando ocurra
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //Corta los números de la posición inicial o la última
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent); //Evalua conjunto de strings que tengan operaciones matemáticas en strings
            } catch {
                pantalla.textContent = "Error!";
            } /* Permite manejar errores de tiempo de ejecución. Esta sentencia permite 
            "intentar (try)" ejecutar el código y "atrapar (catch)" errores que pueden ocurrir en él. (tipo if y else) */
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
        //console.log(boton.textContent);
    });
});