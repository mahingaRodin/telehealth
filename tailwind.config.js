/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #11CC9F 0%, #36BE69 50%, #91CE59 100%)',
        boxShadow: {
          'custom': '0 0 30px rgba(0, 0, 0, 0.5)',
        },
      },
    },
  },
  plugins: [],
}

