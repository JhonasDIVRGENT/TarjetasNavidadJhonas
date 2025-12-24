# 🎄 Tarjeta Navideña Interactiva

Una experiencia navideña mágica y personalizada creada con HTML, CSS y JavaScript vanilla.

![Tarjeta Navideña](https://img.shields.io/badge/Navidad-2024-red?style=for-the-badge&logo=christmas)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Animations-blue?style=for-the-badge&logo=css3)

## ✨ Características

- 🎨 **Diseño Elegante**: Interfaz moderna con efectos glassmorphism y animaciones fluidas
- 💌 **Mensajes Personalizados**: Sistema inteligente que combina significado + símbolo para crear mensajes únicos
- 🎵 **Música Navideña**: Villancicos de fondo con control de reproducción
- 🎆 **Animaciones Espectaculares**: 
  - Árbol de Navidad con haz de luz
  - Papá Noel con nieve cayendo
  - Estrella con rayos brillantes
  - Fuegos artificiales interactivos
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- 🎁 **Interactividad**: Partículas al tocar/hacer clic en la pantalla

## 🚀 Cómo Usar

### Opción 1: Abrir Directamente
1. Descarga o clona este repositorio
2. Abre `index.html` en tu navegador
3. ¡Disfruta la experiencia!

### Opción 2: Con Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx http-server

# Luego abre: http://localhost:8000
```

## 📁 Estructura del Proyecto

```
TarjetasNavidadJhonas/
├── index.html              # Página principal
├── styles.css              # Estilos y animaciones
├── script.js               # Lógica principal
├── js/
│   ├── audio.js           # Gestión de audio
│   ├── symbols.js         # Símbolos SVG personalizados
│   └── messageGenerator.js # Generador de mensajes inteligente
├── assets/
│   └── NavidadAudio.mp3   # Música navideña (agregar tu archivo)
└── README.md              # Este archivo
```

## � Configuración de Música

Para agregar tu propia música navideña:

1. Descarga un villancico en formato MP3
2. Renómbralo a `NavidadAudio.mp3`
3. Colócalo en la carpeta `assets/`

**Fuentes de música gratuita:**
- [Bensound](https://www.bensound.com/royalty-free-music/track/christmas-time)
- [Free Music Archive](https://freemusicarchive.org/search?quicksearch=christmas)
- [Incompetech](https://incompetech.com/music/royalty-free/music.html)

## � Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --color-primary: #0F172A;
    --color-secondary: #DC2626;
    --color-accent: #059669;
    /* ... más colores */
}
```

### Modificar Mensajes
Los mensajes se generan en `js/messageGenerator.js`. Puedes agregar nuevas combinaciones:
```javascript
this.messageTemplates = {
    'nuevo-significado-tree': 'Tu mensaje personalizado aquí...',
    // ...
};
```

## 🌟 Fases de la Experiencia

1. **Tarjeta Cerrada**: Animación de apertura al hacer clic
2. **Formulario Interactivo**: 
   - Nombre del destinatario
   - Selección de significado (Unión, Amor, Alegría, Paz)
   - Selección de símbolo (Árbol, Papá Noel, Estrella)
3. **Mensaje Personalizado**: Carta con mensaje único basado en las elecciones
4. **Animación Final**: Espectáculo visual con el símbolo elegido

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Animaciones y transiciones
  - Glassmorphism
  - Grid y Flexbox
  - Variables CSS
- **JavaScript Vanilla**: 
  - Manipulación del DOM
  - Event handling
  - Generación dinámica de contenido
- **Howler.js**: Gestión de audio

## 🎯 Características Técnicas

- ✅ Sin dependencias de frameworks
- ✅ Código modular y organizado
- ✅ Optimizado para rendimiento
- ✅ Accesible (ARIA labels)
- ✅ SEO friendly
- ✅ Mobile-first design

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles iOS/Android

## 🎁 Créditos

**Desarrollado con ❤️ por JhonasDev**

- Diseño y desarrollo: Jhonas
- Música: [Agregar fuente de tu música]
- Íconos: SVG personalizados

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y educativo.

## 🤝 Contribuciones

¿Tienes ideas para mejorar la tarjeta? ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

JhonasDev - Desarrollador Software

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

**Feliz Navidad 🎄✨**
