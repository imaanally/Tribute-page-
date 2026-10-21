import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Product from "../screens/Product";
import Order from "../screens/Order";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
