import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext.js";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <StrictMode>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
