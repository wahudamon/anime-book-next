import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#fceceb", "#202023")(props),
    },
  }),
};

const semanticTokens = {
  colors: {
    text: {
      default: "#16161D",
      _dark: "#ade3b8",
    },
    heroGradientStart: {
      default: "#7928CA",
      _dark: "#e3a7f9",
    },
    heroGradientEnd: {
      default: "#FF0080",
      _dark: "#fbec8f",
    },
  },
  radii: {
    button: "12px",
  },
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = { mono: `'Menlo', monospace` };

const colors = {
  black: "#16161D",
  glassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  semanticTokens,
  styles,
  components,
  colors,
  fonts,
});

export default theme;
