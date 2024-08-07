/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./node_modules/flowbite/**/*.js,ts,tsx,jsx"
  ],
  theme: {
    extend: {
      screens: {
        mh: "960px"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

