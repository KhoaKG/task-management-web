import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { cyan, deepOrange, green, grey, orange, red, teal } from '@mui/material/colors'
import { colors } from '@mui/material';
import { BorderColor } from '@mui/icons-material';

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
          main: green[500],
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
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides:{
        // Name of the slot
        root: ({theme}) => (
          {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
            '.MuiOutlinedInput-notchedOutline':{
              borderColor: theme.palette.primary.main
            },
            '&:hover':{
              '.MuiOutlinedInput-notchedOutline':{
                  borderColor: theme.palette.primary.main
              },
            },
            '& fieldset':{
              borderWidth: '1px !important'
            }
          }
        )
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: ({theme}) => (
          {
            color: theme.palette.primary.main,
            fontSize: '0.875rem',
          }
        )
      },
    }
  },
});

export default theme