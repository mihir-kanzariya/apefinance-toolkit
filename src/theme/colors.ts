import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#0056AC",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#ff8800",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputBorder: "#cccccc",
  tertiary: "#EFF4F5",
  text: "#ff8800",
  textDisabled: "#BDC2C4",
  textSubtle: "#ff8800",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg,#ffffff00 0%,#ffffff00 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ff8800",
  background: "#1f2b46",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  inputBorder: "#cccccc",
  primaryDark: "#d95b00",
  tertiary: "#2d2f37",
  text: "#ff8800",
  textDisabled: "#666171",
  textSubtle: "#ff8800",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg,#ffffff00 0%,#ffffff00 100%)",
  },
};
