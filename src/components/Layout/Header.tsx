import { Box } from "@mui/system";
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  return (
    <header>
      <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
        <AppBar position="static" elevation={0}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: { sx: "column", sm: "row" },
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                component="div"
                color="text.primary"
              >
                AniQuote🍃
              </Typography>
            </Link>
            <Box>
              <Link to="/bookmarks">
                <Typography color="text.primary">Bookmarks📕</Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Link to="/bookmarks">
          <Button variant="contained">Bookmarks📕</Button>
        </Link>
      </Box>
    </header>
  );
};

export default Header;
