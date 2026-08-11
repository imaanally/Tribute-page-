import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import CrazyRoute from "./CrazyRoute";
import Page404 from "./404";

// * -> match everything
// It must come at the bottom
// 404 page must be the last route.
// Since it matches everything else

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crazy/route/2233111" element={<CrazyRoute />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
