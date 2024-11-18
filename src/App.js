import React, { useState } from "react";
import RegistrationForm from "./Components/Register";
import LoginDialog from "./Components/LoginScreen";
import HomeScreen from "./Components/HomeScreen";
import AppRouter from "./Router";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
