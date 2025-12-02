/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                "hexallo-orange": "#FF6B35",
                "hexallo-brown": "#2f251d",
                "hexallo-gold": "#D4AF37",
                "hexallo-business": "#ae6f28",
                "hexallo-nav": "#efc96d",
            },
        },
    },
    plugins: [],
};
