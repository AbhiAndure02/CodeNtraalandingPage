import React,{useEffect} from "react";
import { FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";

const Sushama = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
 
<>
<Header />
<Home />
<About />
<Skills/>
<Education />
<Projects />
<Contact />
<Footer />


</>   
  )
}

export default Sushama
