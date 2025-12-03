import  Navbar  from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss"
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";


const App = () => {
  return <div>
    <section id = "Homepage">
      <Navbar/>
      <Hero/>
      </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section><Skills/></section>
    <section id = "Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Experience" className="auto-height"> 
    <Experience /> 
</section>
    <section id="Education" className="auto-height"> 
    <Education /> 
</section>
    <section id = "Contact"><Contact/></section>

{/* <Test/>
<Test/> */}
  </div>;
};

export default App;
