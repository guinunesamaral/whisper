import { createTheme } from '@mui/material/styles'
import { purple } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    mode: 'dark',
  },
})
