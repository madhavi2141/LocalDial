import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Banner from "./components/layout/Banner.jsx";
import Category from "./components/layout/Catagory.jsx";
import Footer from "./components/layout/footer.jsx";
import Header from "./components/layout/header.jsx";
import Restaurant from "./components/pages/RestorentPage.jsx/Restorent.jsx";
import { RegistrationForm } from "./components/pages/RegistrationForm";
import Login from "./components/layout/Login.jsx";
import Signup from "./components/layout/Signup.jsx";
import Banks from "./components/layout/Bank.jsx";
import AboutUs from "./components/layout/aboutus.jsx";
import ContactUs from "./components/layout/Contactus.jsx";
import Beautyspa from "./components/layout/Beautyspa.jsx";
import EventOrganizer from "./components/layout/EventOrganizer.jsx";
import Feature from "./components/layout/Feature.jsx";
import Hospital from "./components/layout/Hospital.jsx"
// import Education from "./components/layout/Education.jsx";




function App() {
  const location = useLocation();

  // List of routes where the Banner should not be displayed
  const hideBannerRoutes = ["/restaurant", "/bank","/Beautyspa","/EventOrganizer","/Hospital"];

  const shouldShowBanner = !hideBannerRoutes.includes(location.pathname);
  

  return (
    <>
      <Header />
       <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/banks" element={<Banks />} /> 
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/Beautyspa" element={<Beautyspa/>} />
        <Route path="/EventOrganizer" element={<EventOrganizer/>}/>
        <Route path="/Hospital" element={<Hospital/>}/>
        {/* <Route path="/Education" element={<Education/>}/> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Feature" element={<Feature/>} />
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
