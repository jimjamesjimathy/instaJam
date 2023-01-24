// color design tokens export
export const shades = {
  dark: {
    100: "#367081",
    200: "#2A5765",
    300: "#1E3E48",
    400: "#12252B",
    500: "#060C0E",
  },
  yellow: {
    100: "#F1DCA7",
    200: "#ECCE83",
    300: "#E7C15F",
    400: "#E2B33C",
    500: "#D5A220",
  },
  red: {
    100: "#F3B5A5",
    200: "#EE9781",
    300: "#E9795D",
    400: "#E45C3A",
    500: "#D7431D",
  },
  green: {
    100: "#9BBF9B",
    200: "#83AF83",
    300: "#6BA06A",
    400: "#5A8958",
    500: "#4A7048",
  },
  text: {
    100: "#FFFFFF",
    200: "#EBEBEB",
    300: "#D6D6D6",
    400: "#C2C2C2",
    500: "#ADADAD",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: shades.dark[500],
              two: shades.dark[400],
            },
            secondary: {
              main: shades.red[500],
              two: shades.red[400],
            },
            tertiary: {
              main: shades.yellow[500],
              two: shades.yellow[400],
            },
            accent: {
              main: shades.green[500],
              two: shades.green[400],
            },
            text: {
              main: shades.text[500],
              two: shades.text[400],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: shades.dark[100],
              two: shades.dark[200],
              three: shades.dark[300],
            },
            secondary: {
              main: shades.red[100],
              two: shades.red[200],
              three: shades.red[300],
            },
            tertiary: {
              main: shades.yellow[100],
              two: shades.yellow[200],
              three: shades.yellow[300],
            },
            accent: {
              main: shades.green[100],
              two: shades.green[200],
              three: shades.green[300],
            },
            text: {
              main: shades.text[100],
              two: shades.text[200],
              three: shades.text[300],
            },
          }),
    },
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Amatic SC", "sans-serif"].join(","),
        fontSize: "5rem",
        fontWeight: "bold",
      },
      h2: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
