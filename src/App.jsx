import react, { useState } from "react";

import { Routes, Route } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./components/SideBar";
import Home from "./pages/admin/Home";
import Contact from "./pages/admin/Contact";
import About from "./pages/admin/About";
import Product from "./pages/admin/Product";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <CssBaseline />
      <div className="app">
        <SideBar isSidebar={isSidebar} />
        <main className="content">
          <HeaderBar setIsSidebar={setIsSidebar} />
          <div className="content_body">
            <Box m="20px">
              <Routes>
                <Route path="/admin" element={<Home />} />
                <Route path="/admin/contact" element={<Contact />} />
                <Route path="/admin/about" element={<About />} />
                <Route path="/admin/product" element={<Product />} />
              </Routes>
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
