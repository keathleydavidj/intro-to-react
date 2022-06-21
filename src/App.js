import { StrictMode, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext.js";

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <StrictMode>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </StrictMode>
    </ThemeContext.Provider>
  );
};

export default App;
