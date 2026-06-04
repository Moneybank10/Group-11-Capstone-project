

import logo from './logo.svg';

import './App.css';

// Import all components as they are completed by teammates
// Uncomment each import as the component is ready
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import VideoSection from './components/VideoSection';
import Planet from './planet_section/Planet';
// import PlanetsTable from './components/PlanetsTable';
import ContactForm from "./contactform/contactform";
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      {/* Navbar component will go here */}
      {/* Hero component will go here */}
      {/* videosection component will go here */}
      {/* Planet Cards will go here */}
      {/* Planets Table will go here */}

      

      {/* Footer will go here */}

      {/* NAVBAR SECTION */}
      {/* <Navbar /> */}

      {/* HERO SECTION */}
      {/* 
        The Hero component should include two buttons:
        
        <button onClick={() => document.getElementById('planets').scrollIntoView({ behavior: 'smooth' })}>
          Explore the Data
        </button>

        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Contact Us
        </button>
      */}
      {/* <Hero /> */}

      {/* VIDEO SECTION */}
      {/* <VideoSection /> */}

      {/* PLANET SECTION */}
      <section id="planets">
        <Planet />
      </section>

      {/* PLANETS TABLE SECTION */}
      {/* This section displays planetary facts in a table format */}
      <section id="planets-table">
        {/* <PlanetsTable /> */}
      </section>

      {/* CONTACT FORM SECTION */}
      {/* This section contains the contact form for user inquiries */}
      <section id="contact">
        <ContactForm />
      </section>

  
      <Footer />

    </div>
  );
}

export default App;