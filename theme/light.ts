import { DefaultTheme } from "styled-components";
import { light as lightModal } from "../widgets/Modal/theme";
import { light as lightAlert } from "components/Alert/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  modal: lightModal,
  alert: lightAlert
};

export default lightTheme;
