/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {

        // --- 2. AÑADE LA ANIMACIÓN 'robot-shake' ---
        keyframes: {
          'robot-shake': {
            'from': { transform: 'scale3d(1, 1, 1)' },
            '10%, 20%': { transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)' },
            '30%, 50%, 70%, 90%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)' },
            '40%, 60%, 80%': { transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)' },
            'to': { transform: 'scale3d(1, 1, 1)' },
          },
        },
        animation: {
          'robot-shake': 'robot-shake 1s ease-in-out',
        },
      },
    },
    plugins: [],
  }