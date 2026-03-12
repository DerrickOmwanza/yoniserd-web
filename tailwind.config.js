module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* ===== CORE BRAND PALETTE (4-Role System) ===== */
        'brand-primary': '#102C26',     /* Deep Forest - Brand identity */
        'brand-secondary': '#F7E7CE',   /* Champagne - Warm accents */
        'brand-accent': '#2E7D32',      /* Emerald Green - High-contrast CTAs */

        /* ===== SEMANTIC ALIASES ===== */
        'deep-forest': '#102C26',       /* Deep Forest - Primary dark bg */
        'champagne': '#F7E7CE',         /* Champagne - Warm light accent */
        'accent-green': '#145C44',      /* Accent Green - Interactive elements */
        'accent-blue': '#7EBBBFF',      /* Accent Blue - Focus states */

        /* ===== NEUTRALS ===== */
        'neutral': {
          '950': '#1a1a1a',             /* Near black - Dark overlays */
          '600': '#6B6B6B',             /* Mid gray - Secondary text */
          '100': '#F5F5F5',             /* Off-white - Subtle backgrounds */
          '0': '#FFFFFF',               /* Pure white - Main backgrounds */
        },

        /* ===== SEMANTIC COLORS ===== */
        'success': '#2E7D32',           /* Green - Success states */
        'warning': '#F59E0B',           /* Amber - Warning states */
        'error': '#DC2626',             /* Red - Error states */

        /* ===== LEGACY COLOR NAMES (Backward compatibility) ===== */
        'ng-white-1': '#F4F4EC',        /* Glistening White - Primary light bg */
        'ng-white-2': '#F0EDDB',        /* Cake Batter - Warm cream accent */
        'ng-white-3': '#EDF1FE',        /* Brilliant White - Cool light accent */
        'ng-white-4': '#F0EEEA',        /* Half Black White - Neutral light */
        'ng-white-5': '#FBFCF6',        /* Metallic White - Pure light accent */
        'ng-dark-1': '#000000',         /* Midnight Mist - Pure black */
        'ng-dark-2': '#8C8889',         /* Silver Slate - Medium gray */
        'ng-dark-3': '#CFCFD3',         /* Clouded Pearl - Light gray */
        'ng-dark-4': '#111200',         /* Smoky Black - Deep black */
        'ng-dark-5': '#565449',         /* Olive Drab - Earth brown */
      },
    },
  },
  plugins: [],
}