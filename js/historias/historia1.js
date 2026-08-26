const historiaCabaña = {
    titulo: "La Cabaña Fría: El Secreto del Olvido",
    descripcion: "Una tormenta de nieve te atrapa en un refugio abandonado. Encuentra una salida antes de congelarte.",
    escenaInicial: "inicio",
    escenas: {
        "inicio": {
            texto: "El viento gélido aúlla fuera. Despiertas en una cabaña de madera en penumbra. El frío muerde tus manos y la chimenea está apagada. Hay una puerta principal cerrada con llave, una habitación al fondo y un viejo diario sobre la mesa.",
            opciones: [
                { texto: "Examinar el diario sobre la mesa", destino: "diario" },
                { texto: "Explorar la habitación al fondo", destino: "habitacion" },
                { texto: "Intentar forzar la puerta principal", destino: "puerta_cerrada" }
            ]
        },

        "puerta_cerrada": {
            texto: "Empujas la puerta de madera maciza con todas tus fuerzas, pero no cede. La cerradura de hierro es pesada y antigua. Necesitas una llave si quieres salir por aquí sin morir en el intento.",
            opciones: [
                { texto: "Volver al centro de la cabaña", destino: "inicio" }
            ]
        },

        "diario": {
            texto: "Abres el diario con páginas amarillentas. La última entrada dice: 'El frío no es lo peor que habita en este monte. Si la tormenta te atrapa, enciende la chimenea o busca la salida trasera en el sótano. La llave del sótano descansa bajo la almohada'.",
            opciones: [
                { texto: "Ir a la habitación a buscar la llave", destino: "habitacion" },
                { texto: "Volver al centro de la cabaña", destino: "inicio" }
            ]
        },

        "habitacion": {
            texto: "Entras a un pequeño dormitorio helado. Hay una cama deshacha y un baúl metálico bajo la ventana cubierto de escarcha.",
            opciones: [
                { texto: "Registrar la almohada de la cama", destino: "almohada" },
                { texto: "Intentar abrir el baúl metálico", destino: "baul" },
                { texto: "Regresar al salón principal", destino: "inicio" }
            ]
        },

        "almohada": {
            texto: "Mueves la almohada congelada y escuchas un sonido metálico. ¡Encuentras una llave pesada de hierro! En la etiqueta pone: 'Sótano'. También descubres una trampilla secreta en el suelo de la habitación.",
            opciones: [
                { texto: "Usar la llave para abrir la trampilla del sótano", destino: "sotano" },
                { texto: "Ir a probar si esta llave abre la puerta principal", destino: "puerta_falsa" }
            ]
        },

        "baul": {
            texto: "El baúl está sellado por el hielo. Usas tus manos para romper la capa congelada y al abrirlo encuentras una linterna funcional y cerillas secas. Te equipas con ellas.",
            opciones: [
                { texto: "Volver a inspeccionar la habitación", destino: "habitacion" }
            ]
        },

        "puerta_falsa": {
            texto: "Metes la llave en la cerradura de la puerta principal, pero es demasiado grande. Esta llave no es de aquí. La tormenta afuera parece volverse más violenta y tus fuerzas empiezan a flaquear.",
            opciones: [
                { texto: "Volver a la habitación a buscar la trampilla", destino: "habitacion" },
                { texto: "Intentar encender la chimenea antes de congelarte", destino: "fuego_falso" }
            ]
        },

        "fuego_falso": {
            texto: "Buscas madera seca cerca de la chimenea pero solo hay ramas húmedas. El humo comienza a llenar la cabaña y casi no puedes respirar. Tienes que salir de aquí ya.",
            opciones: [
                { texto: "Ir corriendo al sótano", destino: "sotano" }
            ]
        },

        "sotano": {
            texto: "Usas la llave de hierro y la trampilla se abre con un crujido. Bajas unos peldaños de madera hacia la oscuridad. El aire aquí abajo huele a tierra húmeda pero es notablemente más cálido que arriba. Al fondo ves un túnel empedrado.",
            opciones: [
                { texto: "Avanzar por el túnel a ciegas", destino: "tunel_ciegas" },
                { texto: "Tocar la pared derecha y caminar con cuidado", destino: "tunel_seguro" }
            ]
        },

        "tunel_ciegas": {
            texto: "Avanzas a toda prisa por la oscuridad, pero pisas una tabla podrida sobre un pozo de agua helada. Te caes al agua congelada. [FINAL MALO: Atrapado en la oscuridad helada]",
            opciones: [
                { texto: "Volver a empezar la historia", destino: "inicio" }
            ]
        },

        "tunel_seguro": {
            texto: "Palpas la pared húmeda y avanzas paso a paso. Tras varios minutos caminando, comienzas a ver una luz tenue y sientes aire fresco que no proviene de la tormenta.",
            opciones: [
                { texto: "Avanzar hacia la luz", destino: "salida" }
            ]
        },

        "salida": {
            texto: "Sales por la boca de una cueva al otro lado de la montaña. La tormenta ha quedado bloqueada por la cumbre y a lo lejos ves las luces de un pueblo acogedor. ¡Has sobrevivido a la cabaña! [FINAL BUENO: Escape Exitoso]",
            opciones: [
                { texto: "Jugar de nuevo", destino: "inicio" }
            ]
        }
    }
};