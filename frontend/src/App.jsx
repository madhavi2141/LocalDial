import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Banner from "./components/layout/Banner";
import Category from "./components/layout/Catagory";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Restaurant from "./components/pages/RestorentPage.jsx/Restorent";
import { RegistrationForm } from "./components/pages/RegistrationForm";
import { Login } from "./components/pages/Login";

function App() {
  const location = useLocation();

  // List of routes where the Banner should not be displayed
  const hideBannerRoutes = ["/restaurant"];

  const shouldShowBanner = !hideBannerRoutes.includes(location.pathname);

  return (
    <>
      <Header />
      {shouldShowBanner && <Banner />}
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
