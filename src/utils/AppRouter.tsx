import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Events from "../components/pages/Events";
import Login from "../components/pages/Login";
import EventDetails from "../components/pages/EventDetails";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:id/:name" element={<EventDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
