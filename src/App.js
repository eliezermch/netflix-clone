import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Global State
import { GlobalStateProvider } from "./context/Context";

// Pages
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { NotFound } from "./pages/notFound/NotFound";

function App() {
  return (
    <React.Fragment>
      <GlobalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalStateProvider>
    </React.Fragment>
  );
}

export default App;
