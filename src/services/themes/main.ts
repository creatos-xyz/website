import { MainTheme } from "@src/types/themes";

const main: MainTheme = {
  family: {
    // eslint-disable-next-line quotes
    title: '"Phonk", "SF Pro Display", sans-serif',
    // eslint-disable-next-line quotes
    primary: '"SF Pro Display", sans-serif',
  },
  weight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  size: {
    extraTitle: "64px",
    title: "32px",
    large: "24px",
    medium: "18px",
    normal: "16px",
    small: "13px",
    tiny: "11px",
  },
  breakpoint: {
    /* Desktops and laptops */
    desktop: "1824px",
    /* iPads (landscape) */
    laptop: "1224px",
    /* iPads (portrait) */
    tablet: "1024px",
    /* Smartphones (landscape) */
    mobile: "768px",
  },
};

export default main;
