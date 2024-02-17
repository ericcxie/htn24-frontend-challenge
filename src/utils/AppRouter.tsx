import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import EventDetails from "../components/pages/EventDetails";
import Events from "../components/pages/Events";
import Login from "../components/pages/Login";

interface AppRouterProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppRouter: React.FC<AppRouterProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Events isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/:id/:name"
          element={
            <EventDetails
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
