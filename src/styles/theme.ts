import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    green: {
      '50': '#C5E42B',
      '100': '#26350E',
      '200': '#003516',
    },
    red: {
      '100': '#801C01',
    },
    orange: {
      '100': '#FE4700',
      '200': '#B73D04',
    },
    dark: {
      '100': '#0B0A0A',
      '50': 'rgba(11, 10, 10, 0.376)',
    },
  },

  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },

  styles: {
    global: {
      body: {
        bg: '#808080',
        color: '#878787',
      },
    },
  },
})
