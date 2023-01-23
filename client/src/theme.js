// color design tokens export
export const shades = {
  primary: {
    100: "#4C5454",
    200: "#3A4040",
    300: "#272B2B",
    400: "#131515",
    500: "#0A0B0B",
  },
  secondary: {
    100: "#FF715B",
    200: "#FF3D1F",
    300: "#F52100",
    400: "#CC1B00",
    500: "#A31600",
  },
  tertiary: {
    100: "#63E3D2",
    200: "#40DDC8",
    300: "#25D0B9",
    400: "#1FAD9A",
    500: "#188B7B",
  },
  text: {
    100: "#F5F5F5",
    200: "#E0E0E0",
    300: "#CCCCCC",
    400: "#B8B8B8",
    500: "#A3A3A3",
  },
  accent: {
    100: "#927063",
    200: "#795E53",
    300: "#614B42",
    400: "#493832",
    500: "#493832",
    600: "#F3D9A5", //THIS IS FOR THE MOON AND SUN
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
            first: {
              darkOne: shades.primary[500],
              darkTwo: shades.primary[500],
              darkThree: shades.tertiary[500],
              darkFour: shades.accent[500],
            },
            second: {},
            third: {},
            fourth: {},
            fifth: {},
          }
        : {
            // palette values for light mode
            first: {
              darkOne: shades.text[100],
              darkTwo: shades.secondary[100],
              darkThree: shades.tertiary[100],
              darkFour: shades.accent[100],
            },
            second: {},
            third: {},
            fourth: {},
            fifth: {},
          }),
    },
    typography: {
      fontFamily: ["Nunito", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Nunito", "sans-serif"].join(","),
        fontSize: 40,
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
