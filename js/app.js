// Array que registra todas las historias disponibles en tu proyecto.
const CATALOGO_HISTORIAS = [
    historiaCabaña,
    historiaEspacio,
    historiaDragon,
    historiaCyberpunk
];


/**
 * Renderiza la pantalla del catálogo principal con todas las historias
 */
function mostrarMenuPrincipal() {
    const elementoTexto = document.getElementById('texto-aventura');
    const contenedorBotones = document.getElementById('botones');

    // 1. Detenemos la animación anterior y ponemos el título
    clearInterval(idIntervalo);
    elementoTexto.innerHTML = "=== SELECCIONA UNA AVENTURA ===";
    contenedorBotones.innerHTML = "";

    // 2. Generamos los botones
    CATALOGO_HISTORIAS.forEach(historia => {
        let botonHistoria = document.createElement('button');
        botonHistoria.innerText = `> ${historia.titulo}\n  ${historia.descripcion}`;
        
        botonHistoria.addEventListener('click', () => {
            iniciarJuego(historia);
        });

        contenedorBotones.appendChild(botonHistoria);
    });
}