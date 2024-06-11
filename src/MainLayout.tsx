import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";
import HomeContent from "./HomeContent";

import App2Home from "app2/App2Home";
import App2Content from "app2/App2Content";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "./Login";
import MicroFrontendThreePage from "./MicroFrontendThreePage";
import MicroFrontendOnePage from "./MicroFrontendOnePage";
import MicroFrontendTwoPage from "./MicroFrontendTwoPage";

export default function MainLayout() {
  return (
    <Router>
      <div className="container mx-auto bg-slate-100 h-dvh">
        <div className="flex flex-col h-full">
          {/* <Header></Header> */}
          {/* row 1 */}
          <div className="flex flex-row h-full">
            {/* col 1 */}
            <Nav></Nav>

            {/* col 2 */}
            <div className="my-10">
              <Routes>
                <Route index element={<HomeContent />} />

                <Route path="login" element={<Login />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />

                <Route path="app1/*" element={<MicroFrontendOnePage />} />
                <Route path="app2/*" element={<MicroFrontendTwoPage />} />
                <Route path="app3/*" element={<MicroFrontendThreePage />} />

{/*                 <Route element={<ProtectedRoute />}>
                  <Route path="app2" element={<App2Home />}>
                    <Route path="app2content" element={<App2Content />} />
                  </Route>
                </Route> */}
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
