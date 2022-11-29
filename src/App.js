import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/fixture/:id" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
