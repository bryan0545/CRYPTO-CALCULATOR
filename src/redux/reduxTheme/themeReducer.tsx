import { ThemeAction } from "./themeActions";
import { ThemeState, lightTheme } from "./themeState";

const themeReducer = (
  state: ThemeState = lightTheme,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case "DARK_THEME":
      return action.payload;
    case "LIGHT_THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
