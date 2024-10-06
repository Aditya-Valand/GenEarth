module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust if your components are in another directory
  ],
  theme: {
    extend: {
      colors: {
        tealBlue: '#1995AD',
        customTeal: '#0a758a',
        lightBlue: '#A1D6E2',
        lightGray: '#F1F1F2'
      },
    },
  },
  devServer: {
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
  plugins: [],
}
