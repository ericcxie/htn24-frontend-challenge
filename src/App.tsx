import React from "react";
import AppRouter from "./utils/AppRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <div>
      <AppRouter isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default App;
