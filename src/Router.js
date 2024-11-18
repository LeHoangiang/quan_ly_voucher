// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./Components/Register";
import LoginDialog from "./Components/LoginScreen";
import HomeScreen from "./Components/HomeScreen";
import ManagementVoucher from "./Components/Management";
import VoucherForm from "./Components/AddVoucher";
import ApplyVoucher from "./Components/ApplyVoucher";
import ListVoucher from "./Components/ListVoucher";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginDialog />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/management" element={<ManagementVoucher />} />
        <Route path="/add" element={<VoucherForm />} />
        <Route path="/apply" element={<ApplyVoucher />} />
        <Route path="/list" element={<ListVoucher />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
