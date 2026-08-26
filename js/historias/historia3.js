const historiaDragon = {
    titulo: "La Guarida del Dragón",
    descripcion: "Adéntrate en las ruinas subterráneas de Karak para reclamar el orbe de luz.",
    escenaInicial: "entrada",
    escenas: {
        "entrada": {
            texto: "Te encuentras ante las fauces de piedra de las ruinas de Karak. Antorchas extintas flanquean la entrada. Sientes una brisa cálida y olor a azufre proveniente de las profundidades. A un lado ves los restos de un antiguo campamento.",
            opciones: [
                { texto: "Encender una antorcha y entrar con cautela", destino: "pasillo" },
                { texto: "Examinar los grabados en la piedra exterior", destino: "runas" },
                { texto: "Investigar el campamento abandonado", destino: "campamento" }
            ]
        },
        "campamento": {
            texto: "Entre tiendas rasgadas y cenizas frías, encuentras un baúl de madera reforzado y un cadáver de un antiguo explorador con una nota apretada en su mano.",
            opciones: [
                { texto: "Leer la nota del explorador", destino: "nota_campamento" },
                { texto: "Intentar forzar el baúl de madera", destino: "baul_campamento" },
                { texto: "Volver a la entrada de las ruinas", destino: "entrada" }
            ]
        },
        "nota_campamento": {
            texto: "La nota dice: 'El dragón no ataca a quien lleva el símbolo de la luna, pero la codicia de la espada roja solo atrae a la muerte. Buscad el agua bendita'.",
            opciones: [
                { texto: "Volver a la entrada con esta pista", destino: "entrada" }
            ]
        },
        "baul_campamento": {
            texto: "Forzaste la cerradura gastada. Dentro encuentras un 'Escudo del Sol' reluciente y una poción de agilidad.",
            opciones: [
                { texto: "Equiparte el escudo y entrar a las ruinas", destino: "pasillo_con_escudo" }
            ]
        },
        "runas": {
            texto: "Las runas advierten: 'Aquel que no porte la bendición del agua o el escudo del sol perecerá ante el fuego del guardián'.",
            opciones: [
                { texto: "Ir al campamento a buscar el escudo", destino: "campamento" },
                { texto: "Entrar al pasillo de todos modos", destino: "pasillo" }
            ]
        },
        "pasillo": {
            texto: "El pasillo se divide en tres caminos. A la izquierda escuchas el goteo de agua; al frente ves un pedestal con inscripciones; a la derecha, el calor aumenta drásticamente.",
            opciones: [
                { texto: "Ir a la izquierda (Camino del agua)", destino: "fuente" },
                { texto: "Avanzar al frente (Sala del pedestal)", destino: "sala_acertijo" },
                { texto: "Ir a la derecha (Cámara del tesoro)", destino: "guarida" }
            ]
        },
        "pasillo_con_escudo": {
            texto: "Avanzas por el pasillo. El 'Escudo del Sol' en tu brazo brilla con un tenue fulgor dorado al reaccionar con la magia del entorno.",
            opciones: [
                { texto: "Ir a la izquierda (Camino del agua)", destino: "fuente" },
                { texto: "Ir directo a la cámara del dragón", destino: "guarida_con_escudo" }
            ]
        },
        "fuente": {
            texto: "Llegas a una fuente mágica iluminada por liquen azul. Al beber de ella, una barrera mágica invisible rodea tu cuerpo. Junto a la fuente hay un pasadizo estrecho y una puerta de hierro.",
            opciones: [
                { texto: "Entrar a la cámara principal por el frente", destino: "guarida_protegido" },
                { texto: "Tomar el pasadizo estrecho en las sombras", destino: "cornisa_sigilo" },
                { texto: "Abrir la puerta de hierro con tu espada", destino: "armeria_ruinas" }
            ]
        },
        "armeria_ruinas": {
            texto: "La puerta da a una antigua armería. En un pedestal descansa la 'Lanza de Matadragones', un arma legendaria forjada en mithril.",
            opciones: [
                { texto: "Tomar la lanza e ir a enfrentar al dragón", destino: "combate_legendario" },
                { texto: "Ignorar la lanza e ir a la cámara principal", destino: "guarida_protegido" }
            ]
        },
        "sala_acertijo": {
            texto: "Un pedestal bloquea el paso con una inscripción: 'Solo la luz que no arde abre el camino verdadero'. Hay dos palancas a los lados.",
            opciones: [
                { texto: "Tirar de la palanca de la Llama", destino: "trampa_dardos" },
                { texto: "Tirar de la palanca de la Luna", destino: "pasadizo_secreto" }
            ]
        },
        "trampa_dardos": {
            texto: "Un mecanismo se activa y decenas de dardos envenenados salen de las paredes. Caces al suelo sin aliento. [FINAL MALO]",
            opciones: [
                { texto: "Reintentar", destino: "entrada" }
            ]
        },
        "pasadizo_secreto": {
            texto: "El pedestal se desliza mostrando un pasadizo directo a una cornisa elevada justo encima del nido del dragón.",
            opciones: [
                { texto: "Saltar sobre la cabeza del dragón", destino: "ataque_aereo" },
                { texto: "Usar una cuerda para bajar en sigilo hacia el Orbe", destino: "sigilo_cornisa_exito" }
            ]
        },
        "guarida": {
            texto: "Entras a una gruta gigante. Sobre una montaña de oro duerme un dragón rojo. El Orbe de Luz brilla a su lado. Sin protección o estrategia, el calor es sofocante.",
            opciones: [
                { texto: "Intentar robar el orbe sin protección", destino: "muerte_fuego" },
                { texto: "Retirarte hacia la fuente", destino: "fuente" }
            ]
        },
        "guarida_con_escudo": {
            texto: "El dragón despierta y te lanza un torrente de fuego. Tu 'Escudo del Sol' soporta la llamarada, pero la fuerza del impacto te empuja hacia el Orbe.",
            opciones: [
                { texto: "Agarrar el Orbe y huir por el túnel de colapso", destino: "victoria_escudo" }
            ]
        },
        "guarida_protegido": {
            texto: "Entras a la gruta. Al intentar coger el orbe, el dragón despierta y lanza fuego. ¡La barrera azul de la fuente absorbe el impacto! Tomas el orbe y corres.",
            opciones: [
                { texto: "Victoria - Volver a jugar", destino: "entrada" }
            ]
        },
        "cornisa_sigilo": {
            texto: "Avanzas a tientas por la cornisa. El dragón ronca abajo. Estás justo encima del Orbe de Luz.",
            opciones: [
                { texto: "Descender en silencio", destino: "sigilo_cornisa_exito" },
                { texto: "Tirar una piedra para distraerlo hacia la entrada", destino: "distraccion_exito" }
            ]
        },
        "distraccion_exito": {
            texto: "La piedra cae lejos haciendo ruidosos ecos. El dragón se desplaza a investigar, dejándote el camino libre para coger el Orbe y salir sin ser visto.",
            opciones: [
                { texto: "Victoria Silenciosa - Volver a jugar", destino: "entrada" }
            ]
        },
        "sigilo_cornisa_exito": {
            texto: "Bajas sin hacer un solo ruido. Tomas el Orbe de Luz y te deslizas por una grieta en la pared trasera hacia la superficie.",
            opciones: [
                { texto: "Victoria Maestra - Volver a jugar", destino: "entrada" }
            ]
        },
        "combate_legendario": {
            texto: "Blandes la 'Lanza de Matadragones'. El dragón se abalanza sobre ti, pero atraviesas su escama protectora con un golpe certero. La bestia cae y reclamas no solo el Orbe, sino todo su tesoro. [FINAL LEYENDA]",
            opciones: [
                { texto: "Volver a jugar", destino: "entrada" }
            ]
        },
        "ataque_aereo": {
            texto: "Saltas desde la altura, pero el dragón te detecta en el aire y te atrapa con sus fauces antes de tocar suelo. [FINAL MALO]",
            opciones: [
                { texto: "Reintentar", destino: "entrada" }
            ]
        },
        "victoria_escudo": {
            texto: "El escudo queda destruido tras soportar la llamarada, pero logras salir con el Orbe de Luz a salvo. [FINAL VICTORIOSO]",
            opciones: [
                { texto: "Volver a jugar", destino: "entrada" }
            ]
        },
        "muerte_fuego": {
            texto: "Pisas una moneda de oro que resbala. El dragón abre un ojo y te reduce a cenizas en un segundo. [FINAL MALO]",
            opciones: [
                { texto: "Reintentar", destino: "entrada" }
            ]
        }
    }
};