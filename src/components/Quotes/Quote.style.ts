import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    fontFamily: "Merriweather",
  },
  cardImg: {
    width: "100%",
    // height: "400px",
    objectFit: "fill",
  },
  quoteText: {
    fontStyle: "italic",
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#FEDBD0",
    },
  },
}));

export default useStyles;
