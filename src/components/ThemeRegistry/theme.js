import { Roboto } from 'next/font/google'
import { extendTheme } from '@mui/material-next/styles'

// export const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   fallback: ['Helvetica', 'Arial', 'sans-serif'],
// })

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ee6102',
        },
        secondary: {
          main: '#27408d',
        },
        error: {
          main: '#a82424',
        },
        background: {
          default: 'rgb(246, 245, 244)'
        }
      }
      // typography: {
      //   fontFamily: roboto.style.fontFamily,
      // },
    }
  }
})

export default theme