const historiaAlicia = {
    titulo: "Alicia y el Reino del Espejo Roto",

    descripcion:
        "Alicia cae bajo el castillo de la Reina y descubre un reino oscuro donde cada criatura guarda un secreto y cada elección puede cambiar su destino.",

    escenaInicial: "caida",

    escenas: {

        // =========================================================
        // INICIO: LA CÁMARA INICIAL
        // =========================================================

        "caida": {
            texto:
                "Alicia huye… El suelo cede bajo tus pies y caes por un pozo tapizado de espejos rotos. Tu ropa se desgarra al rozar los trozos de cristal, múltiples arañazos cubren tu cara y brazos.\n\nImpactas suavemente contra un lecho de musgo negro. Frente a ti hay un pasillo sombrío con una puerta de madera podrida y una mesa de piedra en el centro.\n\nSobre la mesa descansan dos objetos:\n- Una botella de cristal con un líquido espeso carmesí y una etiqueta: «BÉBEME».\n- Un pastelillo mohoso con glaseado plateado y una etiqueta: «CÓMEME».",

            opciones: [
                {
                    texto: "Intentar abrir la puerta",
                    destino: "intentar_puerta"
                },
                {
                    texto: "Beber del frasco carmesí",
                    destino: "beber_frasco"
                },
                {
                    texto: "Comer el pastelillo mohoso",
                    destino: "final_prision_piedra"
                }
            ]
        },

        "intentar_puerta": {
            texto:
                "Te clavas una astilla en la mano y la puerta no cede ni un milímetro.\n\nLa única forma de avanzar parece estar sobre la mesa de piedra.",

            opciones: [
                {
                    texto: "Beber del frasco carmesí",
                    destino: "beber_frasco"
                },
                {
                    texto: "Comer el pastelillo mohoso",
                    destino: "final_prision_piedra"
                }
            ]
        },

        // =========================================================
        // TRANSFORMACIÓN Y ELECCIÓN DE TÚNEL
        // =========================================================

        "beber_frasco": {
            texto:
                "El líquido sabe a cobre y óxido. Tu cuerpo comienza a encogerse violentamente; sientes el crujido sordo de tus huesos adaptándose hasta que quedas transformado en una rata escuálida de pelaje ceniza.\n\nEstando a ras de suelo, logras escurrirte por la rendija inferior de la puerta de madera podrida.\n\nAl otro lado, te encuentras en un túnel. Delante de ti, el camino se divide en dos rutas.",

            opciones: [
                {
                    texto: "Tomar el túnel izquierdo (hongos brillantes y ronroneo distorsionado)",
                    destino: "tunel_izquierdo"
                },
                {
                    texto: "Tomar el túnel derecho (vegetación espinosa y patrulla)",
                    destino: "tunel_derecho"
                }
            ]
        },

        // =========================================================
        // RUTA A: TÚNEL IZQUIERDO (EL GATO)
        // =========================================================

        "tunel_izquierdo": {
            texto:
                "Un pasaje estrecho iluminado por hongos brillantes donde se escucha el ronroneo distorsionado de un gato.\n\nUn gato negro con los ojos cosidos y una sonrisa gigantesca aparece flotando sobre ti. Entre sus garras entreabiertas brilla una pequeña llave oxidada.\n\nTe ofrece un trato para recuperar tu forma humana: entrar en la mente de la Reina mientras duerme y averiguar sus miedos más secretos.",

            opciones: [
                {
                    texto: "Aceptar el trato del gato",
                    destino: "final_sueno_reina"
                },
                {
                    texto: "Atacar al gato",
                    destino: "final_trofeo_sonriente"
                },
                {
                    texto: "Examinar al gato de cerca para quitarle la llave",
                    destino: "coger_llave_gato",
                    conseguirObjeto: "llave_oxidada"
                }
            ]
        },

        "coger_llave_gato": {
            texto:
                "Te abalanzas sigilosamente sobre la garra flotante y le arrebatas la llave oxidada. El gato se distrae sorprendido por tu rapidez.",

            opciones: [
                {
                    texto: "Usar la llave oxidada en un cerrojo escondido tras los hongos",
                    destino: "escapatoria_llave",
                    requiereObjeto: "llave_oxidada"
                },
                {
                    texto: "Aceptar el trato del gato tras quitarle la llave",
                    destino: "final_sueno_reina"
                },
                {
                    texto: "Atacar al gato",
                    destino: "final_trofeo_sonriente"
                }
            ]
        },

        "escapatoria_llave": {
            texto:
                "Introduces la llave oxidada en una pequeña ranura oculta tras la pared de hongos. Una diminuta compuerta se abre, permitiéndote escapar de la trampa del gato y salir a las afueras del castillo.",

            opciones: [
                {
                    texto: "Huir por la compuerta hacia la vegetación",
                    destino: "tunel_derecho"
                }
            ]
        },

        // =========================================================
        // RUTA B: TÚNEL DERECHO (PATRULLA Y CONEJO)
        // =========================================================

        "tunel_derecho": {
            texto:
                "Un conducto de vegetación espinosa por el que se escucha avanzar a una patrulla.\n\nTe camuflas entre las raíces para evitar a la patrulla de ciempiés gigantes. Mientras te ocultas, ves una rosa negra impregnada en sangre tirada entre las espinas.\n\nLogras avanzar hasta llegar al patio interior del castillo, donde un Conejo sin pelaje y demacrado está pintando rosas con sangre fresca. Te descubre y te acorrala contra una pared.",

            opciones: [
                {
                    texto: "Coger la rosa de sangre antes de enfrentar al conejo",
                    destino: "patio_con_rosa",
                    conseguirObjeto: "rosa_sangre"
                },
                {
                    texto: "Atacar al conejo",
                    destino: "final_libre_pero_atrapado"
                },
                {
                    texto: "Pedirle clemencia",
                    destino: "final_rata_laboratorio"
                }
            ]
        },

        "patio_con_rosa": {
            texto:
                "Sostienes la rosa de sangre entre tus pequeñas patas. El Conejo acorralador se detiene al ver la flor.",

            opciones: [
                {
                    texto: "Mostrarle la rosa de sangre al Conejo",
                    destino: "mostrar_rosa_conejo",
                    requiereObjeto: "rosa_sangre"
                },
                {
                    texto: "Atacar al conejo",
                    destino: "final_libre_pero_atrapado"
                },
                {
                    texto: "Pedirle clemencia",
                    destino: "final_rata_laboratorio"
                }
            ]
        },

        "mostrar_rosa_conejo": {
            texto:
                "Al ver la rosa de sangre, los ojos del Conejo se llenan de lágrimas. Recuerda su verdadera naturaleza y la flor original del jardín.\n\nAgradecido, en lugar de entregarte a la Reina o acorralarte, te ofrece un antídoto guardado en su frasco de pintura que rompe el hechizo.",

            opciones: [
                {
                    texto: "Beber el antídoto y recuperar tu forma humana para huir",
                    destino: "final_humana_libre"
                }
            ]
        },

        // =========================================================
        // DESENLACES
        // =========================================================

        "final_prision_piedra": {
            texto:
                "El pastelillo sabe a tierra húmeda y ceniza. De inmediato, tu lengua se vuelve áspera como una lija y tan dura como la roca. La petrificación se extiende rápido hasta convertirte en una pequeña piedra gris y sin vida.\n\nRodando torpemente por la pendiente del suelo, te detienes en el rincón más oscuro de la cueva. Te conviertes en un guijarro insignificante en el suelo de la cueva. Todo continúa su curso sobre ti, mientras tu conciencia permanece despierta en el olvido eterno.",

            opciones: [
                {
                    texto: "Volver a jugar",
                    destino: "caida"
                }
            ]
        },

        "final_sueno_reina": {
            texto:
                "Te adentras en la boca del gato hacia la mente de la Reina. Te pierdes en un laberinto de locura y paranoia; la mente de la reina te absorbe y terminas convertido en uno más de los pensamientos dementes que la atormentan.",

            opciones: [
                {
                    texto: "Volver a jugar",
                    destino: "caida"
                }
            ]
        },

        "final_trofeo_sonriente": {
            texto:
                "Atacas al gato. Al ser una criatura fantasmal, tus diminutas garras solo atraviesan humo. El gato se burla y te atrapa entre sus dientes hasta romperte el cuello, después guarda tu cabeza de rata en un pequeño cofre.",

            opciones: [
                {
                    texto: "Volver a jugar",
                    destino: "caida"
                }
            ]
        },

        "final_libre_pero_atrapado": {
            texto:
                "Le saltas a la yugular con tus dientes de roedor, este se desangra y aprovechas para salir huyendo. Encuentras un pequeño agujero entre los rosales, al atravesarlo vuelves a la superficie eres libre, pero aún atrapado en un cuerpo de rata.",

            opciones: [
                {
                    texto: "Volver a jugar",
                    destino: "caida"
                }
            ]
        },

        "final_rata_laboratorio": {
            texto:
                "El Conejo se compadece de tu tamaño y te oculta en el bolsillo de su chaleco. Sin embargo, al presentarse ante la Reina, esta nota el bulto, lo manda ejecutar a él por traición y a ti en lugar de matarte, la Reina hace una señal a sus sirvientes.\n\nTe llevan a las cocinas reales, donde te encierran en una jaula dorada. Tu destino es convertirte en una «mascota de prueba». Cada día, los cocineros de la Reina te fuerzan a comer trozos de sus extraños pasteles y bebidas experimentales para ver sus efectos.",

            opciones: [
                {
                    texto: "Volver a jugar",
                    destino: "caida"
                }
            ]
        },

        "final_humana_libre": {
            texto:
                "El antídoto hace efecto inmediatamente. Tus huesos se expanden y recuperas tu forma humana. Aprovechando la confusión del Conejo emocionado, atravesando los rosales a toda prisa y sales al mundo exterior completa y libre.",

            opciones: [
                {
                    texto: "Volver a jugar",
                    destino: "caida"
                }
            ]
        }
    }
};