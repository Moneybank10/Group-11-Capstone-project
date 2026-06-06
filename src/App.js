import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './hero/hero';
import VideoSection from './videosection/video-section';
import Planet from './planet_section/Planet';
import PlanetsTable from './PlanetsTable/PlanetsTable';
import ContactForm from "./contactform/contactform";
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Hero />
      <VideoSection />
      <section id="planets">
        <Planet />
      </section>
      <section id="planets-table">
      <PlanetsTable />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
 </div>
  );
}

export default App;