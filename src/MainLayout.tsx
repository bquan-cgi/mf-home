import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomeContent from "./HomeContent";
import About from "./About";
import ErrorPage from "./ErrorPage";

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route index element={<HomeContent></HomeContent>} />
            {/*               <Route path="App 1" element={<App1/>} />
              <Route path="App 2" element={<App2/>} /> */}
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
