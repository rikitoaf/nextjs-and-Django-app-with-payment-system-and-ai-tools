/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      colors: {
      
        customPink: '#ec2b84',
        customPurple: '#7f58a4',
        
        light: "#fff",
        accent: "#7B00D3", 
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
    },
  },
  plugins: [],
};
