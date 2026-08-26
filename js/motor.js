// Variable que guardará la historia completa que se esté jugando en ese momento
let historiaActiva = null; 

// Variable que rastrea la escena concreta en la que está el jugador
let escenaActual = ""; 

// Variable para controlar el cronómetro del efecto máquina de escribir
let idIntervalo; 

/**
 * Función encargada de escribir el texto letra por letra
 * @param {string} mensaje - El texto de la escena a mostrar
 */
function escribirTexto(mensaje) {
    let i = 0;
    const elementoTexto = document.getElementById('texto-aventura');
    
    // Paramos cualquier temporizador previo para evitar que los textos se solapen
    clearInterval(idIntervalo); 
    elementoTexto.innerHTML = ""; 

    idIntervalo = setInterval(() => {
        elementoTexto.innerHTML += mensaje.charAt(i);
        i++;
        
        // Cuando llegamos al final del texto, detenemos el cronómetro
        if (i >= mensaje.length) {
            clearInterval(idIntervalo);
        }
    }, 35); // Velocidad de escritura en milisegundos
}

/**
 * Inicia una historia seleccionada desde el menú
 * @param {Object} datosHistoria - El objeto con las escenas cargadas
 */
function iniciarJuego(datosHistoria) {
    historiaActiva = datosHistoria;
    escenaActual = datosHistoria.escenaInicial;
    actualizarJuego();
}

/**
 * Redibuja la interfaz (texto + botones) según la escena actual
 */
function actualizarJuego() {
    const contenedorBotones = document.getElementById('botones');
    
    // 1. Buscamos la información de la escena actual dentro de la historia activa
    const escena = historiaActiva.escenas[escenaActual];

    // 2. Iniciamos el efecto de escritura para el texto de la escena
    escribirTexto(escena.texto);

    // 3. Limpiamos las opciones/botones anteriores
    contenedorBotones.innerHTML = "";

    // 4. Creamos un botón por cada opción disponible en la escena
    escena.opciones.forEach(opcion => {
        let nuevoBoton = document.createElement('button');
        nuevoBoton.innerText = opcion.texto;
        
        nuevoBoton.addEventListener('click', () => {
            // Cambiamos la escena actual y actualizamos la pantalla
            escenaActual = opcion.destino;
            actualizarJuego();
        });
        
        contenedorBotones.appendChild(nuevoBoton);
    });

    // 5. Botón comodín para salir al menú en cualquier momento
    let botonSalida = document.createElement('button');
    botonSalida.innerText = "← Volver al Menú Principal";
    botonSalida.style.marginTop = "15px";
    botonSalida.style.opacity = "0.7";
    
    botonSalida.addEventListener('click', () => {
        clearInterval(idIntervalo); // Detenemos la escritura si aún sigue en marcha
        mostrarMenuPrincipal();     // Devolvemos el control al archivo app.js
    });
    
    contenedorBotones.appendChild(botonSalida);
}