import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WorkoutSession from "./components/WorkoutSession";
import BMIcalculater from "./components/BMIcalculater";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSession />
      <Gallery />
      <Pricing />
      <Contact />
      <BMIcalculater />
      <Footer />

      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
