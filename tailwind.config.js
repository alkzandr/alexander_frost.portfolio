module.exports = {
  darkMode: false, // Use 'class' for manual dark mode control
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',  // Include paths to all files where you use Tailwind CSS
    './components/**/*.{js,ts,jsx,tsx}',  // Include component paths too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
