import './App.css';

// Import all components as they are completed by teammates
// Uncomment each import as the component is ready
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import VideoSection from './components/VideoSection';
// import PlanetCards from './components/PlanetCards';
// import PlanetsTable from './components/PlanetsTable';
// import ContactForm from './components/ContactForm';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
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

      {/* PLANET CARDS SECTION */}
      {/* This section displays planet cards fetched from API */}
      <section id="planets">
        {/* <PlanetCards /> */}
      </section>

      {/* PLANETS TABLE SECTION */}
      {/* This section displays planetary facts in a table format */}
      <section id="planets-table">
        {/* <PlanetsTable /> */}
      </section>

      {/* CONTACT FORM SECTION */}
      {/* This section contains the contact form for user inquiries */}
      <section id="contact">
        {/* <ContactForm /> */}
      </section>

      {/* FOOTER SECTION */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;