/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      
      keyframes:{
           wiggle:{
            '0%': { opacity: '1' },
            '100%': { opacity: '0' },
             
           },
           transformUnderList:{
               '0%':{transform:' translate3d(-5rem ,7.4rem , 0)'},
               '100%':{transform:' translate3d(-2rem ,7.4rem , 0)'},
           },
           Circle1:{
            '0%':{transform:'rotate(90deg) '},
            '100%':{transform:'rotate(0deg)'}, 
              
           },
           Circle2:{
            '0%':{transform:'rotate(-90deg) '},
            '100%':{transform:'rotate(0deg)'}, 
              
           },
           Cart:{
            '0%':{transform:'translate3d(-47rem,0rem,0px)',opacity:'0'},
            '100%':{transform:'translate3d(0rem,0rem,0rem)',opacity:'1'},
           },
           Nanbar12:{
            '0%':{transform:'translate3d(0rem,0rem,0px)',opacity:'1'},
            '100%':{transform:'translate3d(-64rem,0rem,0rem)',opacity:'0'},
           },    
           Nanbar13:{
            '0%':{transform:'translate3d(-64rem,0rem,0px)',opacity:'0'},
            '100%':{transform:'translate3d(0rem,0rem,0rem)',opacity:'1'},
           },
           Nanbar14:{
            '0%':{transform:'translate3d(-22rem,0rem,0px)'},
            '100%':{transform:'translate3d(0rem,0rem,0rem)'},
           },
           Nanbar15:{
            '0%':{transform:'translate3d(0rem,0rem,0px)'},
            '100%':{transform:'translate3d(-22rem,0rem,0rem)'},
           },
           ListFooter:{
            '0%':{opacity:'0'},
            '100%':{opacity:'1'},

           },
           
      },
  

    },
  },
  plugins: [],
}

