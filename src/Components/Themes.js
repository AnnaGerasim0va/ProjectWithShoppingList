import {
  createMuiTheme,
  withStyles,
  makeStyles
} from "@material-ui/core/styles";
import { teal, red } from "@material-ui/core/colors";
import { join } from "path";

export const theme = createMuiTheme({
  palette: {
    primary: teal
  },

  typography: {
    fontSize: 14
  }
});
