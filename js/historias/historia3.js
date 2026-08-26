const historiaDragon = {
    titulo: "La Guarida del Dragón",
    descripcion: "Adéntrate en las ruinas subterráneas de Karak para reclamar el orbe de luz.",
    escenaInicial: "entrada",
    escenas: {
        "entrada": {
            texto: "Te encuentras ante las fauces de piedra de las ruinas de Karak. Antorchas extintas flanquean la entrada. Sientes una brisa cálida y olor a azufre proveniente de las profundidades.",
            opciones: [
                { texto: "Encender una antorcha y entrar con cautela", destino: "pasillo" },
                { texto: "Examinar los grabados en la piedra exterior", destino: "runas" }
            ]
        },
        "runas": {
            texto: "Las runas advierten: 'Aquel que no porte el escudo de sol perecerá ante el fuego del guardián'. Recuerdas haber visto un escudo antiguo en el campamento base.",
            opciones: [
                { texto: "Entrar al pasillo de todos modos", destino: "pasillo" }
            ]
        },
        "pasillo": {
            texto: "El pasillo se divide en dos. A la izquierda escuchas el goteo de agua y un brillo azulado; a la derecha, el calor aumenta drásticamente y ves destellos dorados.",
            opciones: [
                { texto: "Ir a la izquierda (Camino de agua)", destino: "fuente" },
                { texto: "Ir a la derecha (Cámara del tesoro)", destino: "guarida" }
            ]
        },
        "fuente": {
            texto: "Llegas a una fuente mágica iluminada por liquen azul. Al beber de ella, tus heridas se curan y una barrera mágica invisible rodea tu cuerpo.",
            opciones: [
                { texto: "Avanzar hacia la cámara principal", destino: "guarida_protegido" }
            ]
        },
        "guarida": {
            texto: "Entras a una gruta gigante. Sobre una montaña de monedas de oro duerme un dragón rojo. El Orbe de Luz brilla justo al lado de su garra. Sin protección mágica, un solo movimiento en falso te costará la vida.",
            opciones: [
                { texto: "Intentar sigilosamente robar el orbe", destino: "muerte_fuego" },
                { texto: "Retirarte hacia la fuente", destino: "fuente" }
            ]
        },
        "guarida_protegido": {
            texto: "Entras a la gruta del dragón. Al intentar coger el orbe, el dragón despierta y te lanza una ráfaga de fuego. ¡La barrera azul de la fuente absorbe el impacto! Tomas el orbe y huyes a salvo.",
            opciones: [
                { texto: "Victoria - Volver a jugar", destino: "entrada" }
            ]
        },
        "muerte_fuego": {
            texto: "Pisas una moneda de oro que resbala con estrépito. El dragón abre un ojo, se erige y te reduce a cenizas en un segundo. [FINAL MALO]",
            opciones: [
                { texto: "Reintentar", destino: "entrada" }
            ]
        }
    }
};