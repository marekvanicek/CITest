/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,vue}',
    ],
    theme: {
        extend: {
            fontFamily: { inter: 'Inter', 'jetbrains-mono': 'JetBrains Mono' },
        },
    },
    plugins: [],
}
