const historiaCyberpunk = {
    titulo: "Neón & Sombras 2099",
    descripcion: "Investiga la desaparición de un hacker en los barrios bajos de Neo-Vigo.",
    escenaInicial: "callejon",
    escenas: {
        "callejon": {
            texto: "La lluvia ácida cae sobre los carteles de neón del callejón 42. Tienes el chip de datos cifrado que dejó la víctima antes de desaparecer. Un ciborg sospechoso te observa desde la entrada del club, mientras ves un terminal de acceso público a pocos metros.",
            opciones: [
                { texto: "Entrar al club 'The Glitch'", destino: "bar" },
                { texto: "Enfrentar al ciborg en el callejón", destino: "ciborg" },
                { texto: "Conectar el chip a tu implante neuronal", destino: "hack_chip" },
                { texto: "Acceder al terminal público de la calle", destino: "terminal_calle" }
            ]
        },
        "terminal_calle": {
            texto: "El terminal está infectado con malware. Intentas escanear la red de la zona, pero una alerta de la policía privada corporativa rastrea tu posición.",
            opciones: [
                { texto: "Abortar conexión y entrar al club rápidamente", destino: "bar" },
                { texto: "Intentar bloquear el rastreo con tus defensas", destino: "rastreo_fallido" }
            ]
        },
        "rastreo_fallido": {
            texto: "Un drone de seguridad aparece desde la niebla y despliega un pulso electromagnético que fríe tus cibernéticos. Quedas paralizado en el suelo. [FINAL MALO]",
            opciones: [
                { texto: "Reiniciar sistema", destino: "callejon" }
            ]
        },
        "bar": {
            texto: "El bar está lleno de mercenarios y música sintética ensordecedora. El camarero androide te observa, mientras un sujeto en una mesa al fondo te hace una seña discreta. También ves las escaleras hacia el sótano VIP.",
            opciones: [
                { texto: "Sentarte con el desconocido del fondo", destino: "contacto" },
                { texto: "Hablar con el camarero androide", destino: "camarero" },
                { texto: "Intentar colarte al sótano VIP", destino: "sotano_seguridad" }
            ]
        },
        "camarero": {
            texto: "El androide limpia un vaso sin mirarte: 'Si buscas respuestas sobre el hacker, habla con el tipo del fondo o consígueme 500 créditos. Yo no vi nada gratis'.",
            opciones: [
                { texto: "Ir a hablar con el sujeto del fondo", destino: "contacto" },
                { texto: "Hackear el panel del camarero para sacarle información", destino: "hack_camarero" }
            ]
        },
        "hack_camarero": {
            texto: "Logras descifrar la memoria del androide. Descubres que el hacker fue visto por última vez subiendo a un vehículo hacia los laboratorios subterráneos de la corporación.",
            opciones: [
                { texto: "Salir e ir directo a los laboratorios", destino: "laboratorios" }
            ]
        },
        "ciborg": {
            texto: "Te acercas con la mano en la funda de tu arma. El ciborg despliega una cuchilla térmica de su brazo. Sin preparación cibernética o una distracción, te supera en velocidad. [FINAL MALO]",
            opciones: [
                { texto: "Reiniciar memoria", destino: "callejon" }
            ]
        },
        "hack_chip": {
            texto: "Proyectas el contenido del chip en tu visión. El cifrado te exige resolver una clave de acceso o arriesgarte a quemar tus circuitos por un cortafuegos mental.",
            opciones: [
                { texto: "Forzar el acceso sin clave", destino: "sobrecarga" },
                { texto: "Buscar un decodificador con el contacto del bar", destino: "bar" }
            ]
        },
        "sobrecarga": {
            texto: "El cortafuegos del chip activa un virus de retroalimentación neural. Sientes un dolor agudo antes de perder el conocimiento. [FINAL MALO]",
            opciones: [
                { texto: "Reiniciar memoria", destino: "callejon" }
            ]
        },
        "contacto": {
            texto: "El contacto te revela que el ciborg de afuera era un sicario. Te ofrece ayuda: 'Puedo darte un inhibidor de señal para las cámaras o un código de acceso a la puerta trasera de la torre corporativa'.",
            opciones: [
                { texto: "Aceptar el inhibidor de señal", destino: "torre_entrada_principal" },
                { texto: "Aceptar el código de acceso trasero", destino: "torre_puerta_trasera" }
            ]
        },
        "sotano_seguridad": {
            texto: "Un matón cibernético te detiene en la puerta del sótano: 'Entrada solo con pase VIP'. Te exige dinero o una credencial.",
            opciones: [
                { texto: "Volver a la pista principal del bar", destino: "bar" }
            ]
        },
        "torre_entrada_principal": {
            texto: "Llegas a la entrada frontal de la torre corporativa. Hay cámaras y torretas automáticas por todas partes.",
            opciones: [
                { texto: "Usar el inhibidor de señal y avanzar", destino: "rescate_exito" },
                { texto: "Intentar pasar con sigilo sin usar el inhibidor", destino: "rastreo_fallido" }
            ]
        },
        "torre_puerta_trasera": {
            texto: "Llegas al muelle de carga trasero. Introduces el código de acceso en el panel de la puerta.",
            opciones: [
                { texto: "Ingresar a los servidores centrales", destino: "rescate_exito" }
            ]
        },
        "laboratorios": {
            texto: "Te infiltras por los conductos de ventilación de los laboratorios subterráneos. Encuentras al hacker conectado a una máquina de extracción de memoria.",
            opciones: [
                { texto: "Desconectar la máquina inmediatamente", destino: "rescate_exito" },
                { texto: "Descargar los datos de la máquina antes de liberar al hacker", destino: "final_epico" }
            ]
        },
        "rescate_exito": {
            texto: "Logras deshabilitar la seguridad, liberar al hacker y salir del edificio antes de que suenen las alarmas generales. La misión ha sido un éxito.",
            opciones: [
                { texto: "Misión Completada - Volver al menú", destino: "callejon" }
            ]
        },
        "final_epico": {
            texto: "No solo salvas al hacker, sino que copias los secretos más oscuros de la corporación y los transmites en streaming a toda la ciudad. Te conviertes en una leyenda de Neo-Vigo. [FINAL PERFECTO]",
            opciones: [
                { texto: "Volver a jugar", destino: "callejon" }
            ]
        }
    }
};