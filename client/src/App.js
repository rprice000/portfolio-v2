import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Imports from Pages folder
// import NavigatePortfolio from './components/Navigation/navigation';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      {/* <div>
        <NavigatePortfolio></NavigatePortfolio>
      </div> */}
      <main>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
