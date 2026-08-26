const historiaCyberpunk = {
    titulo: "Neón & Sombras 2099",
    descripcion: "Investiga la desaparición de un hacker en los barrios bajos de Neo-Vigo.",
    escenaInicial: "callejon",
    escenas: {
        "callejon": {
            texto: "La lluvia ácida cae sobre los carteles de neón del callejón 42. Tienes el chip de datos que dejó la víctima antes de desaparecer. Un ciborg sospechoso te observa desde la sombra de un bar.",
            opciones: [
                { texto: "Entrar al bar 'The Glitch'", destino: "bar" },
                { texto: "Enfrentar al ciborg en el callejón", destino: "ciborg" },
                { texto: "Conectar el chip a tu implante neuronal", destino: "hack_chip" }
            ]
        },
        "bar": {
            texto: "El bar está lleno de mercenarios y música sintética. El camarero androide te ofrece un trago mientras te señala una mesa al fondo donde alguien te hace una seña.",
            opciones: [
                { texto: "Sentarte con el desconocido", destino: "contacto" },
                { texto: "Salir por la puerta trasera", destino: "callejon" }
            ]
        },
        "ciborg": {
            texto: "Te acercas con la mano en la funda de tu arma. El ciborg despliega una cuchilla térmica de su brazo. Sin preparación cibernética suficiente, te supera en velocidad. [FINAL MALO]",
            opciones: [
                { texto: "Reiniciar memoria", destino: "callejon" }
            ]
        },
        "hack_chip": {
            texto: "Proyectas el contenido del chip en tu visión. Descubres las coordenadas de la guarida corporativa donde tienen al hacker y un código de desactivación para sus defensas.",
            opciones: [
                { texto: "Ir a las coordenadas de la corporación", destino: "corporacion" }
            ]
        },
        "contacto": {
            texto: "El contacto te revela que el ciborg de fuera era un sicario corporativo. Te da un inhibidor de señal para neutralizar las cámaras de seguridad.",
            opciones: [
                { texto: "Ir a la sede de la corporación con el inhibidor", destino: "corporacion" }
            ]
        },
        "corporacion": {
            texto: "Llegas a la torre corporativa. Gracias a la información recopilada, desactivas la seguridad, rescatas al hacker y filtras los crímenes de la corporación a la red pública.",
            opciones: [
                { texto: "Misión Completada - Volver a jugar", destino: "callejon" }
            ]
        }
    }
};