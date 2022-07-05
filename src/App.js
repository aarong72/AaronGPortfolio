import React, { useState, useEffect } from 'react';
import useCollapse from 'react-collapsed';
import { Footer, About, Experience,  Projects } from './containers';
import { Navbar } from './components';
import './App.css'




function App() {
  const [offsetY, setOffsetY]  = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset); 

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  

  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
      </div>
      <section className = 'react_containers'>
        <About />
      </section>
      <section className = 'react_containers'>
        <Experience />
      </section>
      <section className='react_containers'>
        <Projects/>
      </section>
      
        
    </div>
  )


}

export default App