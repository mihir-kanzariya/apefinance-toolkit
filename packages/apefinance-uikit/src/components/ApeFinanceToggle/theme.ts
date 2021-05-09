import { darkColors, lightColors } from "../../theme/colors";
import { ApeFinanceToggleTheme } from "./types";

export const light: ApeFinanceToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: ApeFinanceToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
