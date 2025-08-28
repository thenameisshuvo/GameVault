import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GlobalStyles from "./styles/GlobalStyles";
import GameDetails from "./components/GameDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Cart route removed */}
          <Route path="/:id" element={<GameDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
