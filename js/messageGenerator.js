// ===================================
// Message Generator - Personalized Christmas Messages
// ===================================

class MessageGenerator {
    constructor() {
        // Significados de cada símbolo
        this.symbolMeanings = {
            'tree': {
                name: 'el árbol',
                meaning: 'la naturaleza, el crecimiento y la vida eterna',
                verb: 'te conecta',
                quality: 'tu amor por la naturaleza y el crecimiento personal'
            },
            'santa': {
                name: 'Papá Noel',
                meaning: 'la generosidad, la bondad y el espíritu de dar',
                verb: 'te inspira',
                quality: 'tu corazón generoso y tu deseo de hacer felices a los demás'
            },
            'star': {
                name: 'la estrella',
                meaning: 'la esperanza, los sueños y la guía en la oscuridad',
                verb: 'te ilumina',
                quality: 'tu capacidad de soñar y guiar a otros con tu luz'
            }
        };

        // Mensajes base para cada combinación
        this.messageTemplates = {
            'unión-tree': 'Veo que para ti la unión es importante, y has elegido el árbol 🎄. Esto me dice que valoras las raíces familiares y cómo todos crecemos juntos, como las ramas de un árbol que se entrelazan. La naturaleza nos enseña que juntos somos más fuertes.',
            'unión-santa': 'Veo que para ti la unión es importante, y has elegido a Papá Noel 🎅. Esto refleja que crees en la magia de reunirse, de compartir y de crear momentos especiales en familia. Tu espíritu generoso une a las personas.',
            'unión-star': 'Veo que para ti la unión es importante, y has elegido la estrella ⭐. Esto muestra que eres como una estrella guía para tu familia, iluminando el camino y manteniendo a todos unidos bajo la misma luz de esperanza.',

            'amor-tree': 'Veo que para ti el amor es importante, y has elegido el árbol 🎄. Esto me dice que tu amor crece profundo y fuerte, como las raíces de un árbol. Amas con paciencia y constancia, nutriendo cada relación con cuidado.',
            'amor-santa': 'Veo que para ti el amor es importante, y has elegido a Papá Noel 🎅. Esto refleja que expresas tu amor a través de la generosidad y los detalles. Das amor de forma tangible, haciendo sentir especiales a quienes te rodean.',
            'amor-star': 'Veo que para ti el amor es importante, y has elegido la estrella ⭐. Esto muestra que tu amor es como una luz brillante que guía y da esperanza. Amas con intensidad y eres un faro para quienes amas.',

            'alegría-tree': 'Veo que para ti la alegría es importante, y has elegido el árbol 🎄. Esto me dice que encuentras felicidad en las cosas simples y naturales de la vida. Tu alegría crece orgánicamente, como la naturaleza misma.',
            'alegría-santa': 'Veo que para ti la alegría es importante, y has elegido a Papá Noel 🎅. Esto refleja que tu felicidad viene de hacer sonreír a otros. Eres como Papá Noel, repartiendo alegría por donde vas.',
            'alegría-star': 'Veo que para ti la alegría es importante, y has elegido la estrella ⭐. Esto muestra que tu alegría brilla intensamente e ilumina a quienes te rodean. Eres una fuente de optimismo y luz.',

            'paz-tree': 'Veo que para ti la paz es importante, y has elegido el árbol 🎄. Esto me dice que encuentras tranquilidad en la naturaleza y en el crecimiento pausado. Tu paz es profunda y estable, como un árbol centenario.',
            'paz-santa': 'Veo que para ti la paz es importante, y has elegido a Papá Noel 🎅. Esto refleja que tu paz viene de dar y hacer el bien. Encuentras serenidad en la generosidad y en crear momentos mágicos.',
            'paz-star': 'Veo que para ti la paz es importante, y has elegido la estrella ⭐. Esto muestra que tu paz es como la calma de la noche estrellada. Encuentras tranquilidad en la esperanza y en mirar hacia el futuro.'
        };

        // Cierres personalizados según el símbolo
        this.closingMessages = {
            'tree': 'Que este árbol navideño te recuerde que, como la naturaleza, siempre hay espacio para crecer y florecer. 🌱',
            'santa': 'Que el espíritu de Papá Noel te inspire a seguir dando lo mejor de ti a quienes te rodean. 🎁',
            'star': 'Que esta estrella te recuerde que siempre hay luz, incluso en los momentos más oscuros. ✨'
        };

        // Toques tech según el significado
        this.techMessages = {
            'unión': 'En esta era digital, te envío un abrazo virtual codificado en 01110101 01101110 01101001 01101111 01101110 (unión en binario). ¡Que esta Navidad virtual conecte nuestros corazones! 💻',
            'amor': 'En esta era digital, te envío un <3 compilado con los mejores algoritmos de cariño. function navidad() { return amor++; } ❤️',
            'alegría': 'if (navidad === true) { felicidad++; sonrisa.show(); } - ¡Que tu código de vida siempre retorne alegría! 😊',
            'paz': 'Que tu sistema operativo personal se actualice con la versión Paz 1.0. sudo apt-get install tranquilidad ☮️'
        };
    }

    /**
     * Genera un mensaje personalizado basado en el significado y símbolo elegidos
     * @param {string} name - Nombre del destinatario
     * @param {string} meaning - Significado elegido (unión, amor, alegría, paz)
     * @param {string} symbol - Símbolo elegido (tree, santa, star)
     * @returns {object} - Objeto con greeting y content
     */
    generateMessage(name, meaning, symbol) {
        const key = `${meaning}-${symbol}`;
        const symbolInfo = this.symbolMeanings[symbol];

        // Construir el mensaje personalizado
        const greeting = `Querido/a ${name},`;

        const intro = `La Navidad es una fecha especial que nos invita a reflexionar sobre lo que realmente importa. `;

        const personalizedPart = this.messageTemplates[key] || this.getDefaultMessage(meaning, symbol);

        const closing = this.closingMessages[symbol];

        const techPart = this.techMessages[meaning];

        // Mensaje completo
        const content = `${intro}${personalizedPart}\n\n${closing}\n\n${techPart}`;

        return {
            greeting: greeting,
            content: content
        };
    }

    /**
     * Mensaje por defecto si no existe una combinación específica
     */
    getDefaultMessage(meaning, symbol) {
        const symbolInfo = this.symbolMeanings[symbol];
        return `Has elegido ${symbolInfo.name}, que representa ${symbolInfo.meaning}. Esto ${symbolInfo.verb} con ${symbolInfo.quality}.`;
    }

    /**
     * Obtiene un dato curioso aleatorio
     */
    getRandomCuriosity() {
        const curiosities = [
            'En una ventisca promedio pueden caer hasta 1 millón de copos de nieve por metro cúbico. ¡Cada copo es único e irrepetible!',
            'La tradición de los árboles de Navidad comenzó en Alemania en el siglo XVI. ¡Hoy se estima que se venden más de 30 millones de árboles naturales cada año!',
            'La canción "Noche de Paz" (Silent Night) ha sido traducida a más de 300 idiomas y dialectos diferentes.',
            'Papá Noel recibe más de 8 millones de cartas cada año. ¡En Canadá tiene su propio código postal: H0H 0H0!',
            'Las luces navideñas fueron inventadas por Thomas Edison en 1880. Antes se usaban velas reales en los árboles.',
            'En Japón, comer pollo frito de KFC en Navidad es una tradición tan popular que la gente hace reservas con meses de anticipación.',
            'El récord del muñeco de nieve más grande del mundo mide 37.21 metros de altura. ¡Fue construido en Austria en 2020!',
            'Santa Claus tiene diferentes nombres alrededor del mundo: Papá Noel, San Nicolás, Père Noël, Babbo Natale, y muchos más.',
            'El árbol de Navidad más caro del mundo fue decorado con $11 millones en joyas en Abu Dhabi en 2010.',
            'La primera tarjeta de Navidad fue creada en Londres en 1843 por Sir Henry Cole.',
            'En Noruega, es tradición esconder todas las escobas en Nochebuena para evitar que las brujas las roben.',
            'El villancico "Jingle Bells" fue originalmente escrito para celebrar el Día de Acción de Gracias, no la Navidad.'
        ];

        return curiosities[Math.floor(Math.random() * curiosities.length)];
    }
}

// Export para usar en el script principal
const messageGenerator = new MessageGenerator();
