const historiaCabaña = {
    titulo: "La Cabaña Fría: El Secreto del Olvido",
    descripcion: "Una tormenta de nieve te atrapa en un refugio abandonado. Explora, gestiona tus herramientas y encuentra una salida antes de morir congelado.",
    escenaInicial: "inicio",
    escenas: {
        "inicio": {
            texto: "El viento gélido aúlla fuera con fuerza ensordecedora. Despiertas sobre el suelo de madera helado de una cabaña sumida en la penumbra. Sientes las manos entumecidas y la chimenea de piedra está apagada. Frente a ti hay una puerta principal con un pesado cerrojo de hierro, una mesa de roble con objetos encima y un pasillo oscuro que se adentra hacia las habitaciones.",
            opciones: [
                { texto: "Examinar la mesa de roble", destino: "mesa" },
                { texto: "Inspeccionar la chimenea apagada", destino: "chimenea" },
                { texto: "Avanzar por el pasillo oscuro", destino: "pasillo" },
                { texto: "Intentar abrir la puerta principal", destino: "puerta_cerrada" }
            ]
        },

        "puerta_cerrada": {
            texto: "Apoyas el hombro contra la madera maciza y empujas con fuerza, pero ni se inmuta. El mecanismo de la cerradura de hierro está congelado por dentro. Sin una llave adecuada o algo para deshelar el mecanismo, no vas a salir por aquí.",
            opciones: [
                { texto: "Regresar al centro del salón", destino: "inicio" }
            ]
        },

        "chimenea": {
            texto: "Te acercas al hogar de piedra. Hay cenizas frías de hace días. Al inspeccionar el leñero, descubres que la madera está mojada por la nieve que entra por la chimenea. Intentar encender esto sin madera seca solo creará humo asfixiante.",
            opciones: [
                { texto: "Remover entre las cenizas frías", destino: "buscar_chimenea", soloUnaVez: true },
                { texto: "Volver al centro del salón", destino: "inicio" }
            ]
        },

        "buscar_chimenea": {
            texto: "Remueves con cuidado las cenizas frías y encuentras un viejo atizador de hierro oxidado. Puede ser útil para hacer palanca, pero no te servirá para iluminar el camino.",
            opciones: [
                { texto: "Regresar al centro del salón", destino: "inicio" }
            ]
        },

        "mesa": {
            texto: "Sobre la mesa de roble descansa un diario con tapas de cuero raído y un candelabro de bronce sin velas. El diario parece ser la última bitácora del antiguo habitante del refugio.",
            opciones: [
                { texto: "Abrir y leer el diario", destino: "diario" },
                { texto: "Volver al centro del salón", destino: "inicio" }
            ]
        },

        "diario": {
            texto: "Las páginas crujen por el frío. Lees la última nota garabateada con prisa: 'El frío aprieta. La única vía de escape es el antiguo pasadizo minero bajo el sótano. Escondí la llave metálica bajo la almohada de la cama. ¡ADVERTENCIA! No bajes a las profundidades a oscuras, el suelo del pasadizo está derruido y hay pozos invisibles'.",
            opciones: [
                { texto: "Ir hacia el pasillo para buscar el dormitorio", destino: "pasillo" },
                { texto: "Volver a la mesa", destino: "mesa" }
            ]
        },

        "pasillo": {
            texto: "El pasillo está sumido en una oscuridad casi absoluta. La madera del suelo cruje amenazadoramente bajo tus botas. A la izquierda ves la puerta entreabierta del dormitorio y al fondo del corredor hay una puerta de madera reforzada con un letrero desgastado que dice: 'SÓTANO'.",
            opciones: [
                { texto: "Entrar al dormitorio", destino: "habitacion" },
                { texto: "Examinar la puerta del sótano", destino: "puerta_sotano" },
                { texto: "Volver al salón principal", destino: "inicio" }
            ]
        },

        "habitacion": {
            texto: "Un frío helado domina el dormitorio. Hay una cama con mantas congeladas y, al fondo, un pesado baúl metálico cubierto de escarcha.",
            opciones: [
                { texto: "Registrar la cama y las almohadas", destino: "cama", soloUnaVez: true },
                { texto: "Inspeccionar el baúl metálico", destino: "baul_bloqueado", soloUnaVez: true },
                { texto: "Regresar al pasillo", destino: "pasillo" }
            ]
        },

        "cama": {
            texto: "Apartas las mantas tiesas por el hielo y buscas debajo de la almohada congelada. Encuentras una llave de hierro con empuñadura cuadrada.",
            opciones: [
                { texto: "Coger la llave del sótano y volver a la habitación", destino: "habitacion", conseguirObjeto: "llave_sotano" }
            ]
        },

        "baul_bloqueado": {
            texto: "El baúl de metal está fuertemente sellado por una gruesa capa de hielo en el cierre. Tus dedos están entumecidos, pero aplicas fuerza bruta y rompes la capa helada. Dentro encuentras una linterna de manivela funcional.",
            opciones: [
                { texto: "Coger la linterna de manivela y volver a la habitación", destino: "habitacion", conseguirObjeto: "linterna" }
            ]
        },

        "puerta_sotano": {
            texto: "Llegas a la puerta del sótano. Tiene un pesado cerrojo metálico con una cerradura cuadrada.",
            opciones: [
                { texto: "Usar la llave de empuñadura cuadrada para abrir la puerta", destino: "sotano_abierto", requiereObjeto: "llave_sotano" },
                { texto: "Volver al pasillo", destino: "pasillo" }
            ]
        },

        "sotano_abierto": {
            texto: "La llave gira suavemente y el cerrojo cede. Abres la puerta y ves una escalera de madera que desciende al sótano en la penumbra.",
            opciones: [
                { texto: "Bajar las escaleras a tientas en la oscuridad", destino: "sotano_oscuras" },
                { texto: "Encender la linterna de manivela y bajar iluminando el camino", destino: "sotano_iluminado", requiereObjeto: "linterna" }
            ]
        },

        "sotano_oscuras": {
            texto: "Bajas los peldaños a tientas. Avanzas unos pasos en la oscuridad total hasta que pisas en el vacío. El suelo del pasadizo estaba derruido y caes al pozo. [FINAL MALO: Caída en la oscuridad]",
            opciones: [
                { texto: "Reintentar desde el inicio", destino: "inicio" }
            ]
        },

        "sotano_iluminado": {
            texto: "Bajas las escaleras usando la linterna. El haz de luz revela el antiguo sótano de piedra y el túnel minero al fondo. Gracias a la luz ves claramente un gran pozo en medio del camino que habrías pasado por alto a oscuras.",
            opciones: [
                { texto: "Bordear el pozo con cuidado utilizando la luz", destino: "tunel_minero" },
                { texto: "Intentar saltar por encima del pozo", destino: "salto_fallido" }
            ]
        },

        "salto_fallido": {
            texto: "Tomas carrerilla e intentas saltar, pero la piedra húmeda del borde resbala bajo tus botas. Caes al pozo de agua helada. [FINAL MALO: Atrapado en el pozo]",
            opciones: [
                { texto: "Reintentar la aventura", destino: "inicio" }
            ]
        },

        "tunel_minero": {
            texto: "Bordeas la fosa despacio, asegurando cada pisada. Te adentras en el túnel minero. El camino se divide más adelante en dos galerías: la izquierda desciende hacia abajo y huele a azufre; la derecha sube levemente y se siente una suave brisa.",
            opciones: [
                { texto: "Tomar la galería de la izquierda (descendente)", destino: "galeria_izquierda" },
                { texto: "Tomar la galería de la derecha (ascendente)", destino: "galeria_derecha" }
            ]
        },

        "galeria_izquierda": {
            texto: "Sigues descendiendo. El calor aumenta, pero pronto el aire se vuelve denso y lleno de gases tóxicos. Empiezas a marearte y caes sin fuerzas. [FINAL MALO: Intoxicación por gases]",
            opciones: [
                { texto: "Volver a intentar", destino: "inicio" }
            ]
        },

        "galeria_derecha": {
            texto: "Sigues la pendiente ascendente. La corriente de aire fresco es cada vez más clara. A lo lejos distingues un punto brillante de luz natural.",
            opciones: [
                { texto: "Avanzar hacia la luz", destino: "salida_cueva" }
            ]
        },

        "salida_cueva": {
            texto: "Emerges por una grieta en la ladera sur de la montaña. El sol empieza a romper entre las nubes y abajo en el valle divisas un camino. Has logrado escapar a salvo. [FINAL BUENO: Superviviente de la Montaña]",
            opciones: [
                { texto: "Jugar de nuevo", destino: "inicio" }
            ]
        }
    }
};