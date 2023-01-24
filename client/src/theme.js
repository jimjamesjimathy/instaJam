// color design tokens export
export const shades = {
  first: {
    100: "#EBEBEB",
    200: "#ADADAD",
    300: "#A3A3A3",
    400: "#999999",
    500: "#8F8F8F",
  },
  second: {
    100: "#A1A975",
    200: "#98A168",
    300: "#8E975E",
    400: "#828A56",
    500: "#767D4F",
  },
  third: {
    100: "#FFA185",
    200: "#FF9270",
    300: "#FF825C",
    400: "#FF7247",
    500: "#FF6333",
  },
  fourth: {
    100: "#FFB570",
    200: "#FFAB5C",
    300: "#FFA047",
    400: "#FF9633",
    500: "#FF8B1F",
  },
  fifth: {
    100: "#FFF9EB",
    200: "#FFF3D6",
    300: "#FFEEC2",
    400: "#FFE8AD",
    500: "#FFE299",
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
              main: shades.first[500],
              secondary: shades.first[400],
              three: shades.first[300],
              four: shades.first[200],
              five: shades.first[100],
            },
            secondary: {
              main: shades.second[500],
              secondary: shades.second[400],
              three: shades.second[300],
              four: shades.second[200],
              five: shades.second[100],
            },
            tertiary: {
              main: shades.third[500],
              secondary: shades.third[400],
              three: shades.third[300],
              four: shades.third[200],
              five: shades.third[100],
            },
            accent: {
              main: shades.fourth[500],
              secondary: shades.fourth[400],
              three: shades.fourth[300],
              four: shades.fourth[200],
              five: shades.fourth[100],
            },
            text: {
              main: shades.fifth[500],
              secondary: shades.fifth[400],
              three: shades.fifth[300],
              four: shades.fifth[200],
              five: shades.fifth[100],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: shades.first[500],
              secondary: shades.first[400],
              three: shades.first[300],
              four: shades.first[200],
              five: shades.first[100],
            },
            secondary: {
              main: shades.second[500],
              secondary: shades.second[400],
              three: shades.second[300],
              four: shades.second[200],
              five: shades.second[100],
            },
            tertiary: {
              main: shades.third[500],
              secondary: shades.third[400],
              three: shades.third[300],
              four: shades.third[200],
              five: shades.third[100],
            },
            accent: {
              main: shades.fourth[500],
              secondary: shades.fourth[400],
              three: shades.fourth[300],
              four: shades.fourth[200],
              five: shades.fourth[100],
            },
            text: {
              main: shades.fifth[500],
              secondary: shades.fifth[400],
              three: shades.fifth[300],
              four: shades.fifth[200],
              five: shades.fifth[100],
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
