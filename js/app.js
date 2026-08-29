// Registra todas las historias disponibles usando verificaciones de existencia seguras.
const CATALOGO_HISTORIAS = [
    typeof historiaCabaña !== 'undefined' ? historiaCabaña : (typeof historiaCabana !== 'undefined' ? historiaCabana : null),
    typeof historiaEspacio !== 'undefined' ? historiaEspacio : null,
    typeof historiaDragon !== 'undefined' ? historiaDragon : null,
    typeof historiaCyberpunk !== 'undefined' ? historiaCyberpunk : null
].filter(Boolean);

/**
 * Renderiza la pantalla del catálogo principal con todas las historias
 */
function mostrarMenuPrincipal() {
    const elementoTexto = document.getElementById('texto-aventura');
    const contenedorBotones = document.getElementById('botones');

    if (typeof detenerEscritura === 'function') {
        detenerEscritura();
    }

    if (elementoTexto) {
        elementoTexto.innerHTML = "=== SELECCIONA UNA AVENTURA ===";
    }
    
    if (contenedorBotones) {
        contenedorBotones.innerHTML = "";
    }

    if (typeof actualizarInventario === 'function') {
        actualizarInventario();
    }

    CATALOGO_HISTORIAS.forEach(historia => {
        let botonHistoria = document.createElement('button');
        botonHistoria.innerText = `> ${historia.titulo}\n  ${historia.descripcion}`;
        
        botonHistoria.addEventListener('click', () => {
            if (typeof iniciarJuego === 'function') {
                iniciarJuego(historia);
            }
        });

        if (contenedorBotones) {
            contenedorBotones.appendChild(botonHistoria);
        }
    });
}