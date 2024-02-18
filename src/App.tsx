import React, { useEffect } from "react";
import AppRouter from "./utils/AppRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
