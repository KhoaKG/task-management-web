import { experimental_extendTheme as extendTheme} from '@mui/material/styles';
import { cyan, deepOrange, green, grey, orange, red, teal } from '@mui/material/colors'
import { colors } from '@mui/material';
import { BorderColor } from '@mui/icons-material';

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '58px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

// Create a theme instance.
const theme = extendTheme({
  trello:{
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: {
    //       main: green[500],
    //       secondary: deepOrange[500],
    //       light: red[500]
    //     },
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: {
    //       main: cyan[500],
    //       secondary: orange[500]
    //     },
    //   },
    // },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover':{
            borderWidth: '2px'
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides:{
        // Name of the slot
        root: {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
          // '.MuiOutlinedInput-notchedOutline':{
          //   borderColor: theme.palette.primary.main
          // },
          // '&:hover':{
          //   '.MuiOutlinedInput-notchedOutline':{
          //       borderColor: theme.palette.primary.main
          //   },
          // },
          '& fieldset':{
            borderWidth: '0.5px !important'
          },
          '&:hover fieldset':{
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset':{
            borderWidth: '2px !important'
          }
        }
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        // Name of the slot
        root: {
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }
      },
    },
    MuiCssBaseline:{
      styleOverrides:{
        body: {
          '*::-webkit-scrollbar': {
            with: '8px',
            height: '8px',
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
          }
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1':{
            fontSize: '0.875rem',
          }
        }
      },
    },
  },
});

export default theme