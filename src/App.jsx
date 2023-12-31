import { useEffect, useState } from "react";

// Components
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

// Sanity
import { data } from "./data";

// Animation
import Aos from "aos";
import "aos/dist/aos.css";

// ./Components
import { Menu } from "./components/Menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    let tempTestimonials = [];
    let tempProjects = [];
    let tempServices = [];

    data.map((doc) => {
      if (doc.country) {
        // It is a testimonial
        tempTestimonials.push(doc);
      } else if (doc.liveUrl) {
        // It is a project
        tempProjects.push(doc);
      } else if (doc.icon) {
        tempServices.push(doc);
      }

      return null;
    });

    console.log("data : ", data);

    setTestimonials(tempTestimonials);

    setProjects(tempProjects);
    setServices(tempServices);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 10 });
  }, []);

  return (
    <div className="app-container">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Services services={services} />
      <Portfolio projects={projects} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </div>
  );
}

export default App;
