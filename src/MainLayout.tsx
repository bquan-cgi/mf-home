import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import App1Home from "app1/App1Home";
import App1Content from "app1/App1Content";
import App2Home from "app2/App2Home";
import App2Content from "app2/App2Content";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Header from "./Header";

export default function MainLayout() {
  return (
    <Router>
      <div className="container mx-auto bg-slate-100 h-dvh">
        <div className="flex flex-col h-full">
          <Header></Header>
          {/* row 1 */}
          <div className="flex flex-row h-full">
            {/* col 1 */}
            <Nav></Nav>

            {/* col 2 */}
            <div className="my-10">
              <Routes>
                <Route path="/" element={<HomeContent />} />
                {/* <Route index element={<HomeContent></HomeContent>} /> */}
                <Route path="app1" element={<App1Home />} />
                <Route path="app1content" element={<App1Content />} />
                <Route path="app2" element={<App2Home />} />
                <Route path="app2content" element={<App2Content />} />
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
