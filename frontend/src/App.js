import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/messenger/login" element={<Login />} />
        <Route path="/messenger/register" element={<Register />} />
        <Route path="/" element={<h2> Welcome to ChatApp</h2>} />
      </Routes>
    </Router>
  );
}
