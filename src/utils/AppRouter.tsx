import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import EventDetails from "../components/pages/EventDetails";
import Events from "../components/pages/Events";
import Login from "../components/pages/Login";

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
