import { Theme } from "src/types/themes";

const dark: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: "rgba(29, 29, 33, 1)",
      darker: "rgba(32, 34, 37, 1)",
      dark: "rgba(45, 47, 50, 1)",
      light: "rgba(54, 57, 63, 1)",
      lighter: "rgb(150, 150, 150)",
      lightest: "rgb(255, 255, 255)",
    },
    text: {
      lightest: "rgb(255, 255, 255)",
      lighter: "rgb(168, 168, 168)",
      light: "rgb(150, 150, 150)",
      dark: "rgb(135, 135, 135)",
      darker: "rgb(100, 100, 100)",
      darkest: "rgb(0, 16, 17)",
    },
    accent: {
      light: "rgba(88, 101, 242, 1)",
      green: "rgba(59, 165, 93, 1)",
    },
  },
};

export default dark;
