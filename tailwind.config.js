module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ✅ Light Mode (Softer background + balanced text)
        lightBackground: '#F9FAFB',  // Very soft off-white
        lightText: '#111827',        // Dark gray, near-black for clarity

        // ✅ Dark Mode (High contrast but not harsh)
        darkBackground: '#0B1120',   // Deep navy (cooler than black)
        darkText: '#F1F5F9',         // Light slate, clean but not blinding
        darkCard: '#1E293B',         // For cards/sections
        darkBorder: '#334155',       // Subtle but visible border

        // ✅ Accent Colors (Feel free to customize further)
        primary: '#3B82F6',          // Blue
        secondary: '#10B981',        // Emerald
      },
    },
  },
  plugins: [],
};
