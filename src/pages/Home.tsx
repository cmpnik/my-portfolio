// Make home page instead of using app. Commit
// Start work on making page for helicopter project

import About from "../components/About/About"
import Projects from "../components/Projects/Projects"
import ContactForm from '../components/Contact/ContactForm';

function Home() {
    return (
      <div>
        <About />
        <Projects />
        <ContactForm />
      </div>
    )
  }
  
  export default Home;

