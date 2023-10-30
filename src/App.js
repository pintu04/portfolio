

import Navbar from './components/Navbar/navbar.js'
import Intro from './components/Intro/intro.js';
import Skills from './components/Skills/skills.js';
import Portfolio from './components/Portfolio/portfolio.js';
import Contact from './components/Contact/contact.js';
import Footer from './components/Footer/footer.js';


function App() {
    return (
        <div className="App">
           <Navbar />
           <Intro />
           <Skills />
           <Portfolio />
           <Contact />
           <Footer />
        </div>
    );
  
}

export default App;
