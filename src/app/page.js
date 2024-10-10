import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import IntroPage from "./components/IntroPage";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";

export default function Home() {
  return (
   <div>
    <Homepage />
    <IntroPage />
    <Services />
    <Contact />
    <Team />
    <Testimonials />
    <Pricing />
    <Appointment />
    <Blog />
    <Work />
   </div>
  );
}
