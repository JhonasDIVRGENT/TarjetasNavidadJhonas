// ===================================
// Custom SVG Symbols - Professional Design
// ===================================

const customSymbols = {
    tree: `
        <svg viewBox="0 0 200 240" class="custom-symbol">
            <!-- Tree layers -->
            <path d="M100,40 L130,80 L120,80 L145,115 L135,115 L160,150 L40,150 L65,115 L55,115 L80,80 L70,80 Z" 
                  fill="#065F46" stroke="#034E3B" stroke-width="2"/>
            <path d="M100,40 L125,75 L115,75 L135,105 L125,105 L145,135 L55,135 L75,105 L65,105 L85,75 L75,75 Z" 
                  fill="#059669" opacity="0.8"/>
            
            <!-- Star on top -->
            <polygon points="100,20 105,35 120,35 108,44 113,59 100,50 87,59 92,44 80,35 95,35" 
                     fill="#FCD34D" stroke="#F59E0B" stroke-width="1.5"/>
            
            <!-- Trunk -->
            <rect x="90" y="150" width="20" height="30" rx="2" fill="#78350F" stroke="#451A03" stroke-width="1.5"/>
            
            <!-- Ornaments -->
            <circle cx="85" cy="95" r="5" fill="#DC2626"/>
            <circle cx="115" cy="100" r="5" fill="#3B82F6"/>
            <circle cx="100" cy="120" r="5" fill="#F59E0B"/>
            <circle cx="75" cy="130" r="5" fill="#EC4899"/>
            <circle cx="125" cy="125" r="5" fill="#8B5CF6"/>
            
            <!-- Lights effect -->
            <circle cx="90" cy="110" r="3" fill="#FCD34D" opacity="0.8" class="tree-light-glow"/>
            <circle cx="110" cy="115" r="3" fill="#FCD34D" opacity="0.8" class="tree-light-glow"/>
        </svg>
    `,

    santa: `
        <svg viewBox="0 0 200 240" class="custom-symbol">
            <!-- Hat -->
            <path d="M60,100 Q100,60 140,100 L140,110 L60,110 Z" fill="#DC2626"/>
            <ellipse cx="100" cy="110" rx="42" ry="8" fill="#FAFAFA"/>
            <circle cx="140" cy="100" r="12" fill="#FAFAFA"/>
            
            <!-- Face -->
            <circle cx="100" cy="135" r="35" fill="#FED7AA"/>
            
            <!-- Eyes -->
            <circle cx="90" cy="130" r="4" fill="#1F2937"/>
            <circle cx="110" cy="130" r="4" fill="#1F2937"/>
            <circle cx="91" cy="129" r="2" fill="#FAFAFA"/>
            <circle cx="111" cy="129" r="2" fill="#FAFAFA"/>
            
            <!-- Nose -->
            <ellipse cx="100" cy="140" rx="5" ry="6" fill="#FCA5A5"/>
            
            <!-- Beard -->
            <path d="M70,145 Q70,170 100,175 Q130,170 130,145" fill="#FAFAFA"/>
            <ellipse cx="100" cy="175" rx="32" ry="20" fill="#FAFAFA"/>
            
            <!-- Mustache -->
            <path d="M75,145 Q85,150 100,148 Q115,150 125,145" fill="#FAFAFA" stroke="#E5E7EB" stroke-width="1"/>
            
            <!-- Body -->
            <rect x="70" y="170" width="60" height="50" rx="8" fill="#DC2626"/>
            <rect x="75" y="175" width="50" height="40" rx="6" fill="#EF4444"/>
            
            <!-- Belt -->
            <rect x="70" y="195" width="60" height="10" fill="#1F2937"/>
            <rect x="95" y="193" width="10" height="14" rx="2" fill="#F59E0B"/>
            <rect x="97" y="195" width="6" height="10" fill="#FCD34D"/>
            
            <!-- Buttons -->
            <circle cx="100" cy="185" r="3" fill="#FAFAFA"/>
            <circle cx="100" cy="210" r="3" fill="#FAFAFA"/>
        </svg>
    `,

    star: `
        <svg viewBox="0 0 200 200" class="custom-symbol">
            <!-- Outer glow -->
            <polygon points="100,20 115,70 165,70 125,100 140,150 100,120 60,150 75,100 35,70 85,70" 
                     fill="#FCD34D" opacity="0.3" transform="scale(1.2) translate(-10, -10)"/>
            
            <!-- Main star -->
            <polygon points="100,30 112,65 150,65 120,88 132,123 100,100 68,123 80,88 50,65 88,65" 
                     fill="#F59E0B" stroke="#D97706" stroke-width="2"/>
            
            <!-- Inner star -->
            <polygon points="100,45 107,70 130,70 112,83 119,108 100,93 81,108 88,83 70,70 93,70" 
                     fill="#FCD34D"/>
            
            <!-- Center highlight -->
            <circle cx="100" cy="75" r="12" fill="#FEF3C7" opacity="0.8"/>
            <circle cx="100" cy="75" r="6" fill="#FFFBEB"/>
            
            <!-- Sparkles -->
            <g class="sparkle">
                <line x1="100" y1="15" x2="100" y2="25" stroke="#FEF3C7" stroke-width="2"/>
                <line x1="95" y1="20" x2="105" y2="20" stroke="#FEF3C7" stroke-width="2"/>
            </g>
            <g class="sparkle" transform="translate(40, 30)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#FEF3C7" stroke-width="1.5"/>
                <line x1="-4" y1="4" x2="4" y2="4" stroke="#FEF3C7" stroke-width="1.5"/>
            </g>
            <g class="sparkle" transform="translate(160, 35)">
                <line x1="0" y1="0" x2="0" y2="8" stroke="#FEF3C7" stroke-width="1.5"/>
                <line x1="-4" y1="4" x2="4" y2="4" stroke="#FEF3C7" stroke-width="1.5"/>
            </g>
        </svg>
    `
};

// Meaning icons with better design
const customMeaningIcons = {
    union: `
        <svg viewBox="0 0 100 100" class="meaning-icon">
            <!-- Two hands joining -->
            <path d="M20,50 Q20,30 35,30 L40,45 L45,30 Q60,30 60,50 L60,70 L20,70 Z" 
                  fill="#059669" stroke="#065F46" stroke-width="2"/>
            <path d="M80,50 Q80,30 65,30 L60,45 L55,30 Q40,30 40,50 L40,70 L80,70 Z" 
                  fill="#059669" stroke="#065F46" stroke-width="2"/>
            <!-- Heart in center -->
            <path d="M50,45 L55,40 Q58,37 58,42 Q58,47 50,55 Q42,47 42,42 Q42,37 45,40 Z" 
                  fill="#DC2626"/>
        </svg>
    `,

    love: `
        <svg viewBox="0 0 100 100" class="meaning-icon">
            <!-- Heart -->
            <path d="M50,80 Q20,60 20,40 Q20,25 30,25 Q40,25 50,35 Q60,25 70,25 Q80,25 80,40 Q80,60 50,80 Z" 
                  fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
            <!-- Inner heart -->
            <path d="M50,72 Q28,56 28,40 Q28,30 35,30 Q42,30 50,40 Q58,30 65,30 Q72,30 72,40 Q72,56 50,72 Z" 
                  fill="#EF4444"/>
            <!-- Highlight -->
            <ellipse cx="40" cy="38" rx="8" ry="6" fill="#FCA5A5" opacity="0.6"/>
        </svg>
    `,

    joy: `
        <svg viewBox="0 0 100 100" class="meaning-icon">
            <!-- Confetti pieces -->
            <rect x="20" y="15" width="8" height="12" fill="#F59E0B" transform="rotate(20 24 21)"/>
            <rect x="70" y="20" width="8" height="12" fill="#DC2626" transform="rotate(-15 74 26)"/>
            <circle cx="40" cy="25" r="5" fill="#3B82F6"/>
            <circle cx="85" cy="40" r="4" fill="#EC4899"/>
            <polygon points="60,18 65,25 70,18" fill="#8B5CF6"/>
            
            <!-- Celebration burst -->
            <circle cx="50" cy="55" r="25" fill="#FCD34D" stroke="#F59E0B" stroke-width="3"/>
            <circle cx="50" cy="55" r="20" fill="#FEF3C7"/>
            
            <!-- Sparkle lines -->
            <line x1="50" y1="30" x2="50" y2="20" stroke="#F59E0B" stroke-width="3"/>
            <line x1="75" y1="55" x2="85" y2="55" stroke="#F59E0B" stroke-width="3"/>
            <line x1="50" y1="80" x2="50" y2="90" stroke="#F59E0B" stroke-width="3"/>
            <line x1="25" y1="55" x2="15" y2="55" stroke="#F59E0B" stroke-width="3"/>
        </svg>
    `,

    peace: `
        <svg viewBox="0 0 100 100" class="meaning-icon">
            <!-- Dove body -->
            <ellipse cx="50" cy="55" rx="20" ry="15" fill="#FAFAFA" stroke="#E5E7EB" stroke-width="2"/>
            
            <!-- Wings -->
            <path d="M30,50 Q15,45 10,55 Q15,50 30,55 Z" fill="#FAFAFA" stroke="#E5E7EB" stroke-width="1.5"/>
            <path d="M70,50 Q85,45 90,55 Q85,50 70,55 Z" fill="#FAFAFA" stroke="#E5E7EB" stroke-width="1.5"/>
            
            <!-- Head -->
            <circle cx="65" cy="48" r="8" fill="#FAFAFA" stroke="#E5E7EB" stroke-width="2"/>
            
            <!-- Eye -->
            <circle cx="67" cy="47" r="2" fill="#1F2937"/>
            
            <!-- Beak -->
            <path d="M72,48 L78,50 L72,52 Z" fill="#F59E0B"/>
            
            <!-- Olive branch -->
            <path d="M78,50 Q85,48 90,50" stroke="#059669" stroke-width="2" fill="none"/>
            <ellipse cx="82" cy="48" rx="3" ry="2" fill="#059669"/>
            <ellipse cx="87" cy="49" rx="3" ry="2" fill="#059669"/>
            <ellipse cx="85" cy="51" rx="3" ry="2" fill="#059669"/>
        </svg>
    `
};
