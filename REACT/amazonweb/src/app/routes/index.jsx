import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
