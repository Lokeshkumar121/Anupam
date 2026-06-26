
// // App.js
// import React, { Suspense } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import Home from "./pages/Home/Home.jsx";
// import LoadingFallback from "./components/LoadingFallback";
// import AllServices from "./components/AllServices.jsx";
// import SingleService from "./components/SingleService.jsx";
// import './components/animations.css';
// import './components/animations.js';
// import About from "./pages/About/About.jsx";
// import Gallery from "./pages/Gallery/Gallery.jsx";
// // Wrapper to use useLocation inside Router
// function AppContent() {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin");

//   return (
//     <>
//       <ScrollToTop />
//       {!isAdminRoute && <Navbar />}
//       <Suspense fallback={<LoadingFallback />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* other routes can be added here */}
//           <Route path="/about" element={<About />} />
//           <Route path="/treatments" element={<AllServices />} />
//           <Route path="/treatments/:slug" element={<SingleService />} /> 
//           <Route path="/gallery" element={<Gallery />} />

//         </Routes>
//       </Suspense>
//       {!isAdminRoute && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;



import React, { Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingFallback from "./components/LoadingFallback";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import AllServices from "./components/AllServices";
import SingleService from "./components/SingleService";
import Book from "./pages/Booking/Book.jsx"
// import Book from "./pages/Book/Book";

function AppContent() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<AllServices />} />
          <Route path="/treatments/:slug" element={<SingleService />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}