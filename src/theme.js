import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { cyan, deepOrange, grey, orange, red, teal } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: grey[500],
          secondary: deepOrange[500],
          light: red[500]
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: cyan[500],
          secondary: orange[500]
        },
      },
    },
  },
  // ...other properties
});

export default theme