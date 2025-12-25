// ===================================
// Audio Manager using Howler.js
// ===================================

class AudioManager {
    constructor() {
        this.backgroundMusic = null;
        this.isPlaying = false;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;

        // Villancico navideño - Usando archivo local Navidad.mp3
        this.backgroundMusic = new Howl({
            src: ['assets/Navidad.mp3'],
            loop: true,
            volume: 0.2,
            html5: true,
            onload: () => {
                console.log('✅ Villancico navideño cargado correctamente');
            },
            onloaderror: (id, error) => {
                console.log('❌ Error cargando Navidad.mp3, intentando alternativa online');
                // Si falla el archivo local, usar Bensound como respaldo
                this.backgroundMusic = new Howl({
                    src: ['https://www.bensound.com/bensound-music/bensound-christmastime.mp3'],
                    loop: true,
                    volume: 0.2,
                    html5: true,
                    onload: () => {
                        console.log('✅ Música online cargada como alternativa');
                    },
                    onloaderror: () => {
                        console.log('❌ No se pudo cargar música. Verifica que Navidad.mp3 esté en la carpeta assets/');
                    }
                });
            }
        });

        this.initialized = true;
    }

    play() {
        if (!this.initialized) this.init();

        if (this.backgroundMusic && !this.isPlaying) {
            this.backgroundMusic.play();
            this.isPlaying = true;
        }
    }

    pause() {
        if (this.backgroundMusic && this.isPlaying) {
            this.backgroundMusic.pause();
            this.isPlaying = false;
        }
    }

    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    setVolume(volume) {
        if (this.backgroundMusic) {
            this.backgroundMusic.volume(volume);
        }
    }
}

// Export for use in main script
const audioManager = new AudioManager();
