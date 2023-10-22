import Navbar from "./components/Navbar";
import TwoColumnComponent from "./components/TwoColumnComponent";
import FourColumnComponent from "./components/FourColumnComponent";
import FeatureComponent from "./components/FeatureComponent";
import Roadmap from "./components/Roadmap";
import Partners from "./components/Partners";
import FiveColumnRow from "./components/FiveColumnRow";
import AboutAdashe from "./components/AboutAdashe";
import Documents from "./components/Documents";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import AdvisorsComponent from "./components/Advisors";
import LatestNews from "./components/LatestNews";
import FeaturedOn from "./components/FeaturedOn";
import Exchanges from "./components/Exchanges";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MorePartners from "./components/MorePartners";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <ScrollToTop />
            <Navbar />
            <TwoColumnComponent />
            <div className="wavesvg">
              <FourColumnComponent />
              <FeatureComponent />
            </div>
            <Roadmap />
            <Partners />
            <FiveColumnRow />
            <AboutAdashe />
            <div className="kaydmap">
              <Documents />
              <FAQ />
              <Team />
            </div>
            <AdvisorsComponent />
            <LatestNews />
            <FeaturedOn />
            <Exchanges />
            <Footer />
          </div>
        }
      />

      <Route
        path="/more"
        element={
          <>
            <ScrollToTop />
            {/* <Navbar /> */}
            <MorePartners />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
export default App;
