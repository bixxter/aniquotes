import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEDBD0",
      contrastText: "#442c2e",
    },
    secondary: {
      main: "#feeae6",
      contrastText: "#442c2e",
    },
    error: {
      main: "#c5032b",
      contrastText: "#fff",
    },
    background: {
      default: "#f0e1d4",
      paper: "#092D2C",
    },
    text: {
      primary: "#442c2e",
    },
  },
  typography: {
    fontFamily: ["Merriweather, sans"].join(","),
  },
});

export default theme;
