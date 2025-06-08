import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import Form from "./components/Form";
import Programs from "./components/Programs";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div style={{ paddingBottom: "60px" }}> {/* Padding to prevent overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/form" element={<Form />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
