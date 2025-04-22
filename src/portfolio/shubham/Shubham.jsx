import React, {useEffect} from 'react'

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


const Shubham = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
<>
<Header />
<Home />
<About />
<Contact />
<Footer />
</>  
  )
}

export default Shubham
