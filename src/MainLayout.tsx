import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import About from "./About";
import ErrorPage from "./ErrorPage";

export default function MainLayout() {
  return (
    <Router>
      <div className="container mx-auto bg-slate-100 h-dvh">
        <div className="flex flex-col h-full">
          {/* row 1 */}
          <div className="flex flex-row h-full">
            {/* col 1 */}
            <Nav></Nav>

            {/* col 2 */}
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
          </div>

          {/* row 2 */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}
