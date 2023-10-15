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

function App() {
  return (
    <div>
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
  );
}
export default App;