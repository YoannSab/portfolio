import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    50: '#e6f7ff',
    100: '#b3e0ff',
    200: '#80caff',
    300: '#4db3ff',
    400: '#1a9cff',
    500: '#0080e6',
    600: '#0064b3',
    700: '#004980',
    800: '#002e4d',
    900: '#00141f',
  },
};

const fonts = {
  heading: "'Poppins', sans-serif",
  body: "'Inter', sans-serif",
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors,
  fonts,
  config,
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      variants: {
        solid: (props) => ({
          bg: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.600' : undefined,
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s ease-in-out',
        }),
        outline: (props) => ({
          borderColor: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          color: props.colorScheme === 'brand' ? 'brand.500' : undefined,
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.50' : undefined,
            transform: 'translateY(-2px)',
            boxShadow: 'md',
          },
          _active: {
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s ease-in-out',
        }),
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'lg',
          boxShadow: 'lg',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: 'xl',
          },
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'gray.50' : 'gray.900',
        color: props.colorMode === 'light' ? 'gray.800' : 'white',
      },
    }),
  },
});

export default theme;