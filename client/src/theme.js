// color design tokens export
export const shades = {
  first: {
    100: "#306573",
    200: "#244B56",
    300: "#1E3E48",
    400: "#18323A",
    500: "#12252B",
    700: "#060C0E", // Dark mode background
  },
  second: {
    100: "#EAC871",
    200: "#E7C15F",
    300: "#E4BA4E",
    400: "#E2B33C",
    500: "#DFAC2A",
  },
  third: {
    100: "#E9795D",
    200: "#E76A4B",
    300: "#E45C3A",
    400: "#E24D28",
    500: "#D7431D",
  },
  fourth: {
    100: "#9CBF9B",
    200: "#6BA06A",
    300: "#61955F",
    400: "#5A8958",
    500: "#527C50",
  },
  text: {
    100: "#FFFFFF",
    200: "#F5F5F5",
    300: "#EBEBEB",
    400: "#E0E0E0",
    500: "#D6D6D6",
    700: "#CCCCCC",
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
              main: shades.first[700],
              five: shades.text[100],
              four: shades.first[400],
              three: shades.first[300],
              two: shades.first[200],
              one: shades.first[100],
            },
            secondary: {
              main: shades.second[500],
              four: shades.second[400],
              three: shades.second[300],
              two: shades.second[200],
              one: shades.second[100],
            },
            tertiary: {
              main: shades.third[500],
              four: shades.third[400],
              three: shades.third[300],
              two: shades.third[200],
              one: shades.first[700],
            },
            accent: {
              main: shades.fourth[500],
              four: shades.fourth[400],
              three: shades.fourth[300],
              two: shades.fourth[200],
              one: shades.fourth[100],
            },
            text: {
              main: shades.text[100],
              four: shades.text[400],
              three: shades.first[500],
              two: shades.text[200],
              one: shades.text[100],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: shades.text[700],
              five: shades.first[500],
              four: shades.first[400],
              three: shades.first[300],
              two: shades.first[200],
              one: shades.first[100],
            },
            secondary: {
              main: shades.second[500],
              four: shades.second[400],
              three: shades.second[300],
              two: shades.second[200],
              one: shades.first[700],
            },
            tertiary: {
              main: shades.third[500],
              four: shades.third[400],
              three: shades.third[300],
              two: shades.third[200],
              one: shades.third[100],
            },
            accent: {
              main: shades.fourth[500],
              four: shades.fourth[400],
              three: shades.fourth[300],
              two: shades.fourth[200],
              one: shades.fourth[100],
            },
            text: {
              main: shades.text[500],
              four: shades.text[400],
              three: shades.text[300],
              two: shades.text[200],
              one: shades.text[100],
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
