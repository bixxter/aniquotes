import { ThemeProvider } from "@mui/material";
import React from "react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quote from "./pages/quotes/Quote";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Bookmark from "./pages/bookmarks/Bookmark";
import Anime from "./pages/anime/Anime";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Quote />} />
              <Route path="/bookmarks" element={<Bookmark />} />
              <Route path="/anime/:anime" element={<Anime />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
