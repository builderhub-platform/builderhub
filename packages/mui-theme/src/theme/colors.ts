import { SimplePaletteColorOptions } from "@mui/material/styles";

export interface Colors {
  white: string;
  black: string;
  primary: ColorSystem;
  secondary: ColorSystem;
  success: ColorSystem;
  warning: ColorSystem;
  error: ColorSystem;
  grayScale: Grayscale;
  alert: Alert;
  red: DefaultDepth;
  orange: DefaultDepth;
  yellow: DefaultDepth;
  green: DefaultDepth;
  teal: DefaultDepth;
  blue: DefaultDepth;
  lavender: DefaultDepth;
  pink: DefaultDepth;
  coolGray: ExtendDepth;
  warmGray: ExtendDepth;
  gray: Omit<CustomDepth, "_05">;
  purple: Omit<CustomDepth, "_30" | "_50" | "_70">;
  shadow: Pick<CustomDepth, "_10">;
  border: Pick<CustomDepth, "_20">;
}
export interface Alert {
  red: string;
}
export interface Grayscale {
  offWhite: string;
  bg: string;
  input: string;
  line: string;
  placeholder: string;
  label: string;
  body: string;
  ash: string;
  offBlack: string;
  dark: string;
}
export interface ColorSystem extends SimplePaletteColorOptions {
  bg: string;
  // light: string;
  darkmode: string;
  default: string;
  // dark: string;
}
export interface DefaultDepth {
  _100: string;
  _200: string;
  _300: string;
  _400: string;
  _500: string;
  _600: string;
  _700: string;
  _800: string;
}
export interface ExtendDepth extends DefaultDepth {
  _900: string;
}

export interface CustomDepth {
  _05: string;
  _10: string;
  _20: string;
  _30: string;
  _40: string;
  _50: string;
  _60: string;
  _70: string;
  _80: string;
  _90: string;
  _100: string;
}

export const colors: Colors = {
  white: "#fff",
  black: "#000",
  primary: {
    bg: "#EBECFE",
    light: "#BFBEFC",
    darkmode: "#A996FF",
    default: "#610BEF",
    dark: "#4700AB",
    main: "#610BEF",
  },
  secondary: {
    bg: "#8DE9FF",
    light: "#E3FEFF",
    darkmode: "#50C8FC",
    default: "#005BD4",
    dark: "#0041AC",
    main: "#005BD4",
  },
  success: {
    bg: "#CBFFAE",
    light: "#EAF9DE",
    darkmode: "#A6F787",
    default: "#008A00",
    dark: "#067306",
    main: "#008A00",
  },
  warning: {
    bg: "#FFE6B0",
    light: "#FFF8E9",
    darkmode: "#FFDF9A",
    default: "#EAAC30",
    dark: "#946300",
    main: "#FFDF9A",
  },
  error: {
    bg: "#FFABE8",
    light: "#FFECFC",
    darkmode: "#FF75CB",
    // default: "#CA024F",
    default: "#FF7777",
    dark: "#9E0038",
    main: "#FF7777",
  },
  grayScale: {
    offWhite: "#FCFCFC",
    bg: "#F7F7FC",
    input: "#EFF0F7",
    line: "#D9DBE9",
    placeholder: "#A0A3BD",
    label: "#6E7191",
    body: "#4E4B66",
    ash: "#262338",
    offBlack: "#14142B",
    dark: "#666666",
  },
  alert: {
    red: "#FF475D",
  },
  red: {
    _100: "#FFF2F1",
    _200: "#FFC3C0",
    _300: "#FF968F",
    _400: "#FD6150",
    _500: "#E61B00",
    _600: "#AB1400",
    _700: "#8B1200",
    _800: "#5E0C00",
  },
  orange: {
    _100: "#FFF4EB",
    _200: "#FFDBBD",
    _300: "#FFA65A",
    _400: "#FF9943",
    _500: "#EE6D00",
    _600: "#C25700",
    _700: "#994600",
    _800: "#662F00",
  },
  yellow: {
    _100: "#FFF8E9",
    _200: "#FFE6B0",
    _300: "#FFDF9A",
    _400: "#FDCC62",
    _500: "#EAAC30",
    _600: "#946300",
    _700: "#6E5523",
    _800: "#534019",
  },
  green: {
    _100: "#EAF9DE",
    _200: "#CBFFAE",
    _300: "#A6F787",
    _400: "#7DF75A",
    _500: "#18BB0C",
    _600: "#008A00",
    _700: "#067306",
    _800: "#07540A",
  },
  teal: {
    _100: "#E0FFF8",
    _200: "#9CFBEF",
    _300: "#6DFDED",
    _400: "#41F8E1",
    _500: "#03CFBB",
    _600: "#00857A",
    _700: "#007A70",
    _800: "#005649",
  },
  blue: {
    _100: "#E3FEFF",
    _200: "#8DE9FF",
    _300: "#50C8FC",
    _400: "#2AA8F8",
    _500: "#0576F0",
    _600: "#005BD4",
    _700: "#0041AC",
    _800: "#002463",
  },
  lavender: {
    _100: "#F2F0FF",
    _200: "#C4B6FF",
    _300: "#B78CFF",
    _400: "#B374FF",
    _500: "#AA33FF",
    _600: "#6C00AE",
    _700: "#550084",
    _800: "#3A0055",
  },
  pink: {
    _100: "#FFECFC",
    _200: "#FFABE8",
    _300: "#FF75CB",
    _400: "#FF54AF",
    _500: "#E3026F",
    _600: "#CA024F",
    _700: "#9E0038",
    _800: "#5B001E",
  },
  coolGray: {
    _100: "#FCFCFC",
    _200: "#F7F7FC",
    _300: "#EFF0F6",
    _400: "#D9DBE9",
    _500: "#A0A3BD",
    _600: "#6E7191",
    _700: "#4E4B66",
    _800: "#262338",
    _900: "#14142A",
  },
  warmGray: {
    _100: "#FCFCFC",
    _200: "#F7F7F7",
    _300: "#F0EEEE",
    _400: "#DBD7D7",
    _500: "#A6A0A0",
    _600: "#7A7575",
    _700: "#666060",
    _800: "#3D3838",
    _900: "#160808",
  },
  gray: {
    _10: "#F2F2F2",
    _20: "#D4D3D7",
    _30: "#BEBDC3",
    _40: "#A8A7AF",
    _50: "#93919C",
    _60: "#7D7B88",
    _70: "#676574",
    _80: "#514F60",
    _90: "#3C394C",
    _100: "#262338",
  },
  shadow: {
    _10: "#807F7F",
  },
  purple: {
    _05: "#EBE7FD",
    _10: "#B4A7F1 ",
    _20: "#A291EE",
    _40: "#836DE9",
    _60: "#664AE3",
    _80: "#513BB5",
    _90: "#3C2C87",
    _100: "#342574",
  },
  border: {
    _20: "#DBDBDB",
  },
};
