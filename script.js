// ===================================
// State Management
// ===================================
const state = {
    recipientName: '',
    meaning: '',
    symbol: '',
    currentPhase: 1
};

let elements = {};

// ===================================
// Initialization
// ===================================
function init() {
    // Capture DOM elements after DOM is loaded
    elements = {
        phases: document.querySelectorAll('.phase'),
        cardClosed: document.getElementById('card-closed'),
        recipientInput: document.getElementById('recipient-name'),
        continueBtn: document.getElementById('continue-btn'),
        messageGreeting: document.getElementById('message-greeting'),
        messageContent: document.getElementById('message-content'),
        giftBtn: document.getElementById('gift-btn'),
        animationContainer: document.getElementById('animation-container'),
        particlesContainer: document.getElementById('particles-container'),
        fireworksContainer: document.getElementById('fireworks-container')
    };

    injectCustomSymbols();
    createSnowfall();
    setupEventListeners();
    setupMusicControl();
}

// ===================================
// Inject Custom SVG Symbols
// ===================================
function injectCustomSymbols() {
    if (typeof customMeaningIcons !== 'undefined') {
        document.getElementById('icon-union').innerHTML = customMeaningIcons.union;
        document.getElementById('icon-love').innerHTML = customMeaningIcons.love;
        document.getElementById('icon-joy').innerHTML = customMeaningIcons.joy;
        document.getElementById('icon-peace').innerHTML = customMeaningIcons.peace;
    }

    if (typeof customSymbols !== 'undefined') {
        document.getElementById('icon-tree').innerHTML = customSymbols.tree;
        document.getElementById('icon-santa').innerHTML = customSymbols.santa;
        document.getElementById('icon-star').innerHTML = customSymbols.star;
    }
}

// ===================================
// Music Control Setup
// ===================================
function setupMusicControl() {
    const musicToggle = document.getElementById('music-toggle');
    if (!musicToggle) return;

    musicToggle.addEventListener('click', () => {
        if (typeof audioManager !== 'undefined') {
            audioManager.toggle();
            musicToggle.classList.toggle('playing');
            musicToggle.classList.toggle('muted');
        }
    });
}

// ===================================
// Event Listeners
// ===================================
function setupEventListeners() {
    if (elements.cardClosed) {
        elements.cardClosed.addEventListener('click', openCard);
    }

    if (elements.recipientInput) {
        elements.recipientInput.addEventListener('input', handleNameInput);
    }

    const meaningGrid = document.querySelector('#input-meaning .icon-grid');
    if (meaningGrid) {
        meaningGrid.addEventListener('click', (e) => {
            const button = e.target.closest('.icon-option');
            if (button) handleSelection(button, 'meaning');
        });
    }

    const symbolGrid = document.querySelector('#input-symbol .icon-grid');
    if (symbolGrid) {
        symbolGrid.addEventListener('click', (e) => {
            const button = e.target.closest('.icon-option');
            if (button) handleSelection(button, 'symbol');
        });
    }

    if (elements.continueBtn) {
        elements.continueBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (!elements.continueBtn.disabled) {
                showMessage();
            }
        });
    }

    if (elements.giftBtn) {
        elements.giftBtn.addEventListener('click', showFinalAnimation);
    }

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartExperience);
    }
}

// ===================================
// Phase 1: Card Opening
// ===================================
function openCard() {
    elements.cardClosed.classList.add('card-opening');
    setTimeout(() => switchPhase(2), 1500);
}

// ===================================
// Phase 2: User Inputs
// ===================================
function handleNameInput(e) {
    state.recipientName = e.target.value.trim();
    checkFormCompletion();
}

function handleSelection(option, type) {
    const group = option.parentElement;
    const allOptions = group.querySelectorAll('.icon-option');

    allOptions.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    state[type] = option.dataset.value;

    checkFormCompletion();
}

function checkFormCompletion() {
    const isComplete = state.recipientName && state.meaning && state.symbol;
    if (elements.continueBtn) {
        elements.continueBtn.disabled = !isComplete;
    }
}

// ===================================
// Phase 3: Personalized Message
// ===================================
function showMessage() {
    switchPhase(3);

    // Start music
    if (typeof audioManager !== 'undefined') {
        audioManager.play();
        const musicToggle = document.getElementById('music-toggle');
        if (musicToggle) musicToggle.classList.add('playing');
    }

    // Symbol emojis for letter header
    const symbolEmojis = {
        'tree': '🎄',
        'santa': '🎅',
        'star': '⭐'
    };

    // Add symbol to letter header
    const letterSymbol = document.getElementById('letter-symbol');
    if (letterSymbol) {
        letterSymbol.textContent = symbolEmojis[state.symbol] || '🎄';
    }

    // Generate personalized message using the intelligent generator
    const personalizedMessage = messageGenerator.generateMessage(
        state.recipientName,
        state.meaning,
        state.symbol
    );

    // Get random curiosity
    const randomCuriosity = messageGenerator.getRandomCuriosity();

    // Display the message
    elements.messageGreeting.textContent = personalizedMessage.greeting;
    elements.messageContent.textContent = personalizedMessage.content;

    const curiosityText = document.getElementById('curiosity-text');
    if (curiosityText) {
        curiosityText.textContent = randomCuriosity;
    }
}

// ===================================
// Phase 4: Final Animation
// ===================================
function showFinalAnimation() {
    switchPhase(4);

    // Add large final greeting name
    const greeting = document.createElement('h1');
    greeting.className = 'final-greeting';
    greeting.textContent = `¡Feliz Navidad, ${state.recipientName}!`;
    elements.animationContainer.appendChild(greeting);

    switch (state.symbol) {
        case 'tree':
            createTreeAnimation();
            break;
        case 'santa':
            createSantaAnimation();
            break;
        case 'star':
            createStarAnimation();
            break;
        default:
        // console.log('❌ Unknown symbol:', state.symbol);
    }

    setTimeout(() => createFireworks(), 1500);
    setTimeout(() => createFireworks(), 3000);
    setTimeout(() => createFireworks(), 4500);

    // Setup touch/click interaction for particles
    setupTouchParticles();
}

function setupTouchParticles() {
    const container = elements.animationContainer;

    const createParticlesAtPoint = (x, y) => {
        const particleCount = 15;
        const colors = ['#FCD34D', '#DC2626', '#059669', '#3B82F6', '#EC4899', '#F59E0B', '#8B5CF6'];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'touch-particle';
            particle.style.position = 'fixed';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.borderRadius = '50%';
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';

            const angle = (360 / particleCount) * i + (Math.random() * 30 - 15);
            const distance = Math.random() * 80 + 40;
            const tx = Math.cos(angle * Math.PI / 180) * distance;
            const ty = Math.sin(angle * Math.PI / 180) * distance;

            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);
            particle.style.animation = 'touch-particle-burst 0.8s ease-out forwards';

            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 800);
        }
    };

    // Touch event for mobile
    container.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        createParticlesAtPoint(touch.clientX, touch.clientY);
    });

    // Click event for desktop
    container.addEventListener('click', (e) => {
        createParticlesAtPoint(e.clientX, e.clientY);
    });

    // Add hint text (only if it doesn't exist)
    if (!container.querySelector('.touch-hint')) {
        const hint = document.createElement('div');
        hint.className = 'touch-hint';
        hint.innerHTML = window.innerWidth < 768 ? 'Toca la pantalla ✨' : 'Haz clic en la pantalla ✨';
        hint.style.position = 'fixed';
        hint.style.bottom = '80px';
        hint.style.left = '50%';
        hint.style.transform = 'translateX(-50%)';
        hint.style.fontSize = 'clamp(1rem, 3vw, 1.3rem)';
        hint.style.color = 'var(--color-secondary-light)';
        hint.style.textAlign = 'center';
        hint.style.zIndex = '100';
        hint.style.animation = 'pulse-hint 2s ease-in-out infinite';
        hint.style.textShadow = '0 0 10px rgba(252, 211, 77, 0.5)';
        hint.style.pointerEvents = 'none';
        container.appendChild(hint);
    }
}

function createTreeAnimation() {
    // Árbol simple
    const tree = document.createElement('div');
    tree.className = 'tree-animation';
    tree.textContent = '🎄';
    tree.style.position = 'relative';
    tree.style.fontSize = 'clamp(8rem, 20vw, 12rem)';
    elements.animationContainer.appendChild(tree);

    // Haz de luz que hace destellos
    const lightBeam = document.createElement('div');
    lightBeam.className = 'light-beam';
    lightBeam.style.position = 'absolute';
    lightBeam.style.width = '200px';
    lightBeam.style.height = '200px';
    lightBeam.style.left = '50%';
    lightBeam.style.top = '50%';
    lightBeam.style.transform = 'translate(-50%, -50%)';
    lightBeam.style.background = 'radial-gradient(circle, rgba(252,211,77,0.6) 0%, rgba(252,211,77,0.3) 30%, transparent 70%)';
    lightBeam.style.borderRadius = '50%';
    lightBeam.style.animation = 'light-pulse-beam 2s ease-in-out infinite';
    lightBeam.style.pointerEvents = 'none';
    elements.animationContainer.appendChild(lightBeam);

    // Destellos adicionales
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.position = 'absolute';
            sparkle.style.fontSize = '2rem';
            sparkle.style.left = `${30 + Math.random() * 40}%`;
            sparkle.style.top = `${30 + Math.random() * 40}%`;
            sparkle.style.animation = 'sparkle-twinkle 1.5s ease-in-out infinite';
            sparkle.style.animationDelay = `${i * 0.5}s`;
            elements.animationContainer.appendChild(sparkle);
        }, i * 500);
    }
}

function createSantaAnimation() {
    const santa = document.createElement('div');
    santa.className = 'santa-animation';
    santa.textContent = '🎅';
    santa.style.fontSize = 'clamp(6rem, 15vw, 10rem)'; // Responsive size
    santa.style.position = 'relative';
    elements.animationContainer.appendChild(santa);

    // Reduce snowflakes for mobile
    const snowCount = window.innerWidth < 768 ? 50 : 100;
    for (let i = 0; i < snowCount; i++) {
        setTimeout(() => createSnowflake(), i * 30);
    }

    setTimeout(() => {
        const sleigh = document.createElement('div');
        sleigh.textContent = '🛷';
        sleigh.style.position = 'absolute';
        sleigh.style.fontSize = 'clamp(2.5rem, 6vw, 4rem)';
        sleigh.style.left = '-10%';
        sleigh.style.top = '30%';
        sleigh.style.animation = 'sleigh-fly 3s ease-in-out forwards';
        sleigh.style.zIndex = '5';
        elements.animationContainer.appendChild(sleigh);
    }, 1500);
}

function createStarAnimation() {
    const star = document.createElement('div');
    star.className = 'star-animation';
    star.textContent = '⭐';
    star.style.position = 'relative';
    star.style.fontSize = 'clamp(6rem, 18vw, 12rem)'; // Responsive size
    elements.animationContainer.appendChild(star);

    // Reduce rays for mobile
    const rayCount = window.innerWidth < 768 ? 8 : 16;
    for (let i = 0; i < rayCount; i++) {
        setTimeout(() => {
            const ray = document.createElement('div');
            ray.className = 'star-ray';
            const angle = (360 / rayCount) * i;
            ray.style.left = '50%';
            ray.style.top = '50%';
            ray.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
            ray.style.transformOrigin = 'top center';
            elements.animationContainer.appendChild(ray);
        }, i * 50);
    }

    // Reduce mini stars for mobile
    const miniStarCount = window.innerWidth < 768 ? 4 : 8;
    for (let i = 0; i < miniStarCount; i++) {
        setTimeout(() => {
            const miniStar = document.createElement('div');
            miniStar.textContent = '✨';
            miniStar.style.position = 'absolute';
            miniStar.style.fontSize = 'clamp(1.5rem, 4vw, 2rem)';
            const angle = (360 / miniStarCount) * i;
            const radius = window.innerWidth < 768 ? 80 : 150;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            miniStar.style.left = `calc(50% + ${x}px)`;
            miniStar.style.top = `calc(50% + ${y}px)`;
            miniStar.style.animation = 'twinkle 1.5s ease-in-out infinite';
            elements.animationContainer.appendChild(miniStar);
        }, i * 100);
    }
}

// ===================================
// Particle Effects
// ===================================
function createSnowfall() {
    for (let i = 0; i < 30; i++) {
        createSnowflake();
    }
    setInterval(() => createSnowflake(), 3000);
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    const size = Math.random() * 4 + 2;
    const startPos = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${startPos}%`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${delay}s`;

    elements.particlesContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), (duration + delay) * 1000);
}

function createFireworks() {
    const fireworkCount = 5;

    for (let f = 0; f < fireworkCount; f++) {
        setTimeout(() => {
            const x = Math.random() * 80 + 10;
            const y = Math.random() * 40 + 20;

            const colors = ['#FCD34D', '#DC2626', '#059669', '#3B82F6', '#EC4899', '#F59E0B', '#8B5CF6'];
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                particle.style.left = `${x}%`;
                particle.style.top = `${y}%`;
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                particle.style.width = '6px';
                particle.style.height = '6px';

                const angle = (360 / particleCount) * i + (Math.random() * 20 - 10);
                const distance = Math.random() * 150 + 80;
                const tx = Math.cos(angle * Math.PI / 180) * distance;
                const ty = Math.sin(angle * Math.PI / 180) * distance;

                particle.style.setProperty('--tx', `${tx}px`);
                particle.style.setProperty('--ty', `${ty}px`);

                elements.fireworksContainer.appendChild(particle);

                setTimeout(() => particle.remove(), 1500);
            }
        }, f * 800);
    }
}


// ===================================
// Phase Management
// ===================================
function switchPhase(phaseNumber) {
    elements.phases.forEach(phase => phase.classList.remove('active'));

    const targetPhase = document.getElementById(`phase-${phaseNumber}`);
    if (targetPhase) {
        targetPhase.classList.add('active');
        state.currentPhase = phaseNumber;
    }
}

function restartExperience() {
    // Reset state variables
    state.recipientName = '';
    state.meaning = '';
    state.symbol = '';

    // Reset inputs and selections
    if (elements.recipientInput) elements.recipientInput.value = '';
    document.querySelectorAll('.icon-option').forEach(opt => opt.classList.remove('selected'));
    if (elements.continueBtn) elements.continueBtn.disabled = true;

    // Clear animations and fireworks
    if (elements.animationContainer) elements.animationContainer.innerHTML = '';
    if (elements.fireworksContainer) elements.fireworksContainer.innerHTML = '';

    // Stop music
    if (typeof audioManager !== 'undefined') audioManager.pause();

    // Go to first phase
    switchPhase(1);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// Start Application
// ===================================
document.addEventListener('DOMContentLoaded', init);
