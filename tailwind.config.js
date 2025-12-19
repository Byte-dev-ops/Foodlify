/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'selector',
  theme: {
    screen:{
       sm:"480px", // for small screen as it work breakpoint (first in mobile then to big pc)
       md:"768px",
       lg:"1024px"
    },
    extend: { 
      colors: {
      primaryColor: '#010a5e',
      primaryColorLight: "#010d78",
      secondaryColor: '#FFCC00',
      paragraphColor: '#c0c0c0',      
      whiteColor: '#fff',
      blackColor: "#000",
      greenColor: "#007936",
      redColor: "#cc3433",
      darkColor: '#000',
      darkColorLight: "#171717",
    },
    keyframes:{
      move:{
        "50%":{transform:'translately(-1rem'}
      }
    },
    animation:{
      'movingY':'move 2s linear infinite '
    }
  },
  container:{
    center:true,
    padding:{
      default:'1rem',
      sm:'1.5rem'
    }
  }
  },
  fontFamily: {
    oswald: ['Oswald', 'sans-serif'],
    dmsans: ['DM Sans', 'sans-serif']
  },
  plugins: [],
}

