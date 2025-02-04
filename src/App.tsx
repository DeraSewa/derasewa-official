import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermCondition from "./pages/TermCondition";
import HelpSupport from "./pages/HelpSupport";
import FAQ from "./pages/FAQ";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <header>
          <Nav />
        </header>

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-and-policy" element={<PrivacyPolicy />} />
            <Route path="/term-and-condition" element={<TermCondition />} />
            <Route path="/help-and-support" element={<HelpSupport />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={"404 page not found"} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App;