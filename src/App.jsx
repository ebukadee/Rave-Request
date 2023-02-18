import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import Jockey from "./pages/Jockey";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Jockey" element={<Jockey />} />

          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
