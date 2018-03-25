import createMuiTheme from "material-ui/styles/createMuiTheme";
import { red, purple, green } from "material-ui/colors";

export default createMuiTheme({
  palette: {
    primary: {
      main: red["A700"]
    },
    secondary: {
      main: purple[500]
    }
  }
});
