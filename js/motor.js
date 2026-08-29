// ============================================================
// ESTADO DEL JUEGO
// ============================================================

const estadoJuego = {

    historia: null,

    escena: "",

    texto: "",

    inventario: [],

    escenasVisitadas: new Set()
};


// ============================================================
// CONTROL DE LA MÁQUINA DE ESCRIBIR
// ============================================================

let idIntervalo = null;


// ============================================================
// INVENTARIO
// ============================================================

/**
 * Comprueba si el jugador posee un objeto.
 *
 * @param {string} objeto - Identificador del objeto.
 * @returns {boolean}
 */
function tieneObjeto(objeto) {

    return estadoJuego.inventario.includes(objeto);
}


/**
 * Añade un objeto al inventario.
 *
 * Si el objeto ya existe, no lo añade otra vez.
 *
 * @param {string} objeto - Identificador del objeto.
 */
function añadirObjeto(objeto) {

    if (!objeto) {
        return;
    }

    if (tieneObjeto(objeto)) {
        return;
    }

    estadoJuego.inventario.push(objeto);

    actualizarInventario();
}


/**
 * Elimina un objeto del inventario.
 *
 * @param {string} objeto - Identificador del objeto.
 */
function quitarObjeto(objeto) {

    const posicion =
        estadoJuego.inventario.indexOf(objeto);

    if (posicion === -1) {
        return;
    }

    estadoJuego.inventario.splice(posicion, 1);

    actualizarInventario();
}


/**
 * Vacía completamente el inventario.
 */
function vaciarInventario() {

    estadoJuego.inventario = [];

    actualizarInventario();
}


/**
 * Actualiza visualmente el inventario.
 */
function actualizarInventario() {

    const contenedor =
        document.getElementById("inventario");

    // Si el elemento todavía no existe, no hacemos nada
    if (!contenedor) {
        return;
    }

    // Limpiamos el contenido anterior
    contenedor.innerHTML = "";


    // --------------------------------------------------------
    // INVENTARIO VACÍO
    // --------------------------------------------------------

    if (estadoJuego.inventario.length === 0) {

        const mensaje =
            document.createElement("p");

        mensaje.className = "inventory-empty";

        mensaje.textContent = "> VACÍO";

        contenedor.appendChild(mensaje);

        return;
    }


    // --------------------------------------------------------
    // MOSTRAR OBJETOS
    // --------------------------------------------------------

    estadoJuego.inventario.forEach(objeto => {

        const elemento =
            document.createElement("p");

        elemento.className = "inventory-item";

        elemento.textContent = objeto;

        contenedor.appendChild(elemento);
    });
}


// ============================================================
// EFECTO MÁQUINA DE ESCRIBIR
// ============================================================

/**
 * Escribe el texto de una escena letra por letra.
 *
 * @param {string} mensaje - Texto que se mostrará.
 */
function escribirTexto(mensaje) {

    const elementoTexto =
        document.getElementById("texto-aventura");

    // Guardamos el texto completo
    estadoJuego.texto = mensaje;

    // Detenemos cualquier escritura anterior
    detenerEscritura();

    // Limpiamos el texto
    elementoTexto.textContent = "";

    // No hacemos nada si no hay texto
    if (!mensaje || mensaje.length === 0) {
        return;
    }

    let posicion = 0;

    // Comenzamos a escribir
    idIntervalo = setInterval(() => {

        elementoTexto.textContent +=
            mensaje.charAt(posicion);

        posicion++;

        // Hemos terminado
        if (posicion >= mensaje.length) {

            detenerEscritura();
        }

    }, 30);
}


/**
 * Detiene la máquina de escribir.
 */
function detenerEscritura() {

    if (idIntervalo !== null) {

        clearInterval(idIntervalo);

        idIntervalo = null;
    }
}


/**
 * Muestra inmediatamente el texto completo.
 */
function mostrarTextoCompleto() {

    const elementoTexto =
        document.getElementById("texto-aventura");

    detenerEscritura();

    elementoTexto.textContent =
        estadoJuego.texto;
}


// ============================================================
// INICIAR NUEVA PARTIDA
// ============================================================

/**
 * Inicia una historia desde cero.
 *
 * @param {Object} datosHistoria - Historia seleccionada.
 */
function iniciarJuego(datosHistoria) {

    // Guardamos la historia
    estadoJuego.historia = datosHistoria;

    // Escena inicial
    estadoJuego.escena =
        datosHistoria.escenaInicial;

    // Reiniciamos el progreso
    estadoJuego.texto = "";

    estadoJuego.inventario = [];

    estadoJuego.escenasVisitadas =
        new Set();

    // Actualizamos el inventario visual
    actualizarInventario();

    // Mostramos la escena
    actualizarJuego();
}


// ============================================================
// REINICIAR PARTIDA
// ============================================================

/**
 * Reinicia completamente la partida actual.
 */
function reiniciarPartida() {

    if (!estadoJuego.historia) {
        return;
    }

    // Volvemos a la escena inicial
    estadoJuego.escena =
        estadoJuego.historia.escenaInicial;

    // Limpiamos el progreso
    estadoJuego.texto = "";

    estadoJuego.inventario = [];

    estadoJuego.escenasVisitadas =
        new Set();

    // Actualizamos interfaz
    actualizarInventario();

    actualizarJuego();
}


// ============================================================
// VOLVER AL MENÚ
// ============================================================

/**
 * Sale de la aventura y vuelve al menú principal.
 */
function volverAlMenuPrincipal() {

    detenerEscritura();

    // Limpiamos el estado
    estadoJuego.historia = null;

    estadoJuego.escena = "";

    estadoJuego.texto = "";

    estadoJuego.inventario = [];

    estadoJuego.escenasVisitadas =
        new Set();

    // Actualizamos el inventario
    actualizarInventario();

    // Volvemos al menú
    mostrarMenuPrincipal();
}


// ============================================================
// ACTUALIZAR EL JUEGO
// ============================================================

/**
 * Redibuja la interfaz según la escena actual.
 */
function actualizarJuego() {

    const contenedorBotones =
        document.getElementById("botones");

    const elementoTexto =
        document.getElementById("texto-aventura");


    // ========================================================
    // COMPROBAR HISTORIA
    // ========================================================

    if (!estadoJuego.historia) {

        console.error(
            "No hay ninguna historia activa."
        );

        return;
    }


    // ========================================================
    // OBTENER ESCENA
    // ========================================================

    const escena =
        estadoJuego.historia.escenas[
            estadoJuego.escena
        ];


    // Comprobar que existe
    if (!escena) {

        console.error(
            `Error crítico: la escena '${estadoJuego.escena}' no existe en la historia.`
        );

        return;
    }


    // ========================================================
    // MARCAR ESCENA COMO VISITADA
    // ========================================================

    estadoJuego.escenasVisitadas.add(
        estadoJuego.escena
    );


    // ========================================================
    // MOSTRAR TEXTO
    // ========================================================

    escribirTexto(escena.texto);

    if (elementoTexto) {
        elementoTexto.onclick =
            mostrarTextoCompleto;
    }


    // ========================================================
    // ACTUALIZAR INVENTARIO
    // ========================================================

    actualizarInventario();


    // ========================================================
    // LIMPIAR BOTONES
    // ========================================================

    if (contenedorBotones) {
        contenedorBotones.innerHTML = "";
    }


    // ========================================================
    // CREAR OPCIONES
    // ========================================================

    if (
        escena.opciones &&
        Array.isArray(escena.opciones)
    ) {

        escena.opciones.forEach(opcion => {


            // ------------------------------------------------
            // REQUIERE UN OBJETO
            // ------------------------------------------------

            if (
                opcion.requiereObjeto &&
                !tieneObjeto(
                    opcion.requiereObjeto
                )
            ) {

                return;
            }


            // ------------------------------------------------
            // YA TENEMOS EL OBJETO
            // ------------------------------------------------

            if (
                opcion.conseguirObjeto &&
                tieneObjeto(
                    opcion.conseguirObjeto
                )
            ) {

                return;
            }


            // ------------------------------------------------
            // SOLO UNA VEZ
            // ------------------------------------------------

            if (
                opcion.soloUnaVez &&
                estadoJuego.escenasVisitadas.has(
                    opcion.destino
                )
            ) {

                return;
            }


            // ------------------------------------------------
            // CREAR BOTÓN
            // ------------------------------------------------

            const nuevoBoton =
                document.createElement("button");

            nuevoBoton.innerText =
                opcion.texto;


            // ------------------------------------------------
            // ACCIÓN DEL BOTÓN
            // ------------------------------------------------

            nuevoBoton.addEventListener(
                "click",
                () => {

                    // Detener escritura
                    detenerEscritura();


                    // ----------------------------------------
                    // CONSEGUIR OBJETO
                    // ----------------------------------------

                    if (
                        opcion.conseguirObjeto
                    ) {

                        añadirObjeto(
                            opcion.conseguirObjeto
                        );
                    }


                    // ----------------------------------------
                    // CAMBIAR DE ESCENA
                    // ----------------------------------------

                    estadoJuego.escena =
                        opcion.destino;


                    // ----------------------------------------
                    // ACTUALIZAR
                    // ----------------------------------------

                    actualizarJuego();

                }
            );


            if (contenedorBotones) {
                contenedorBotones.appendChild(
                    nuevoBoton
                );
            }

        });
    }


    // ========================================================
    // BOTÓN VOLVER AL MENÚ
    // ========================================================

    const botonSalida =
        document.createElement("button");

    botonSalida.innerText =
        "← Volver al Menú Principal";

    botonSalida.style.marginTop = "15px";

    botonSalida.style.opacity = "0.7";


    botonSalida.addEventListener(
        "click",
        () => {

            volverAlMenuPrincipal();

        }
    );


    if (contenedorBotones) {
        contenedorBotones.appendChild(
            botonSalida
        );
    }
}