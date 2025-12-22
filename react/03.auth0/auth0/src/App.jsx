import React from "react";
import AuthButtons from "./components/AuthButtons";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <h1>React Auth0 Example</h1>
      <AuthButtons />
      <Profile />
    </div>
  );
};

export default App;
