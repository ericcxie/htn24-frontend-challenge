import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Events from "../components/pages/Events";
import Login from "../components/pages/Login";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
