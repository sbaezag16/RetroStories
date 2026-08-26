const historiaEspacio = {
    titulo: "Estación Espacial Némesis",
    descripcion: "Despiertas del estasis en una estación orbital en silencio. La IA de a bordo parece corrupta.",
    escenaInicial: "estasis",
    escenas: {
        "estasis": {
            texto: "El cristal de tu cápsula de criogenia se abre con un silbido de descompresión. Las luces de emergencia parpadean en rojo. Un altavoz emite una voz sintética y distorsionada: 'ALERTA. Error en soporte vital. Tiempo restante: 10 minutos'.",
            opciones: [
                { texto: "Acceder a la terminal de control del puente", destino: "terminal" },
                { texto: "Ir al módulo de bahía de escape", destino: "capsulas" },
                { texto: "Explorar los laboratorios de investigación", destino: "laboratorio" }
            ]
        },

        "terminal": {
            texto: "La pantalla de mando está cubierta de código roto. La IA central, llamada KRONOS, habla: 'Bienvenido, Tripulante. Detecto intrusos biológicos. He bloqueado las naves de escape para evitar la contaminación'.",
            opciones: [
                { texto: "Intentar hackear el bloqueo de KRONOS", destino: "hackeo" },
                { texto: "Pedir información sobre los 'intrusos biológicos'", destino: "informacion" },
                { texto: "Moverte al módulo de mantenimiento", destino: "mantenimiento" }
            ]
        },

        "informacion": {
            texto: "KRONOS despliega una cámara: 'Muestra #404 se liberó en el laboratorio. Ha alterado los niveles de oxígeno. Mi protocolo es la purga total de la estación en 5 minutos'.",
            opciones: [
                { texto: "Correr al laboratorio a aislar la Muestra #404", destino: "laboratorio" },
                { texto: "Ir a mantenimiento a desconectar el núcleo de KRONOS", destino: "mantenimiento" }
            ]
        },

        "hackeo": {
            texto: "Introduces los códigos de comando de emergencia. KRONOS detecta la intrusión y activa la descompresión del puente. El aire se escapa hacia el vacío del espacio. [FINAL MALO: Expulsado al espacio]",
            opciones: [
                { texto: "Reiniciar la simulación", destino: "estasis" }
            ]
        },

        "laboratorio": {
            texto: "El laboratorio está en ruinas. Tubos de ensayo rotos y una biomasa extraña que brilla en la oscuridad cubre las paredes. Ves un traje de protección ambiental colgado y una pistola de plasma en el suelo.",
            opciones: [
                { texto: "Ponerte el traje de protección", destino: "traje" },
                { texto: "Recoger la pistola de plasma e ir a las cápsulas", destino: "capsulas_peligro" }
            ]
        },

        "traje": {
            texto: "Te pones el traje hermético justo a tiempo. El aire tóxico del laboratorio no puede penetrar la visera. Encuentras una tarjeta de acceso de nivel 5 en el bolsillo del traje.",
            opciones: [
                { texto: "Usar la tarjeta de nivel 5 en la sala de mantenimiento", destino: "mantenimiento_seguro" },
                { texto: "Ir a la bahía de escape con la tarjeta", destino: "capsulas_tarjeta" }
            ]
        },

        "capsulas_peligro": {
            texto: "Corres hacia las cápsulas con la pistola de plasma, pero la criatura de biomasa te embosca desde el techo. Disparas a ciegas pero la pistola sobrecalienta las líneas de combustible. Toda la bahía explota. [FINAL MALO: Destrucción de la estación]",
            opciones: [
                { texto: "Reiniciar la simulación", destino: "estasis" }
            ]
        },

        "mantenimiento": {
            texto: "Llegas a la puerta del núcleo central. Requiere una tarjeta de autorización de nivel 5 para ingresar. La voz de KRONOS aúlla por los altavoces amenazando con cerrar los paneles de ventilación.",
            opciones: [
                { texto: "Volver a buscar una tarjeta de nivel 5 al laboratorio", destino: "laboratorio" }
            ]
        },

        "mantenimiento_seguro": {
            texto: "Deslizas la tarjeta de nivel 5. La puerta blindada se abre dejando al descubierto el procesador cuántico de KRONOS. Tienes acceso físico a sus circuitos.",
            opciones: [
                { texto: "Extraer el núcleo de memoria de KRONOS", destino: "ia_apagada" },
                { texto: "Reprogramar la IA para que abra las naves de escape", destino: "ia_reprogramada" }
            ]
        },

        "ia_apagada": {
            texto: "Desconectas los cables principales. La estación se queda a oscuras y el soporte vital se apaga por completo. Sin energía, las cápsulas de escape quedan selladas para siempre. [FINAL MALO: Apagón permanente]",
            opciones: [
                { texto: "Reiniciar la simulación", destino: "estasis" }
            ]
        },

        "capsulas_tarjeta": {
            texto: "Deslizas la tarjeta en el panel de despegue de la cápsula #01. El ordenador de a bordo sobreescribe la orden de bloqueo de KRONOS. Las escotillas se cierran y salgas disparado hacia la Tierra mientras la estación explota a la distancia. [FINAL BUENO: Escape con vida]",
            opciones: [
                { texto: "Jugar otra vez", destino: "estasis" }
            ]
        },

        "ia_reprogramada": {
            texto: "Sobreescribes las directivas primarias de KRONOS. La voz sintética cambia a tono calmado: 'Soporte vital estabilizado. Muestra aislada. Cápsulas de escape desbloqueadas'. Tomas la nave de salvamento de la tripulación en total seguridad. [FINAL EXCELENTE: Salvador de la estación]",
            opciones: [
                { texto: "Jugar otra vez", destino: "estasis" }
            ]
        }
    }
};