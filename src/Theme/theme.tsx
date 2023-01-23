import { createTheme } from "@mui/material";
import { grey, purple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: grey[900],
    },
  },
});
