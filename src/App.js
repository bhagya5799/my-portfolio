import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home'
import About from './Components/About';

import Projects from './Components/Projects';
import './App.css';
import Contact from './Components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
       
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
