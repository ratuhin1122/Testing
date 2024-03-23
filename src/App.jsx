import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Program from "./components/Programs/Program";
import Title from "./components/Title/Title";
import Campus from './components/Campus/Campus';
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title=' What We Offer'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='Testimonials' title='What Student Says'/>
       <Testimonials/>
       <Title subTitle='Contuct Us ' title='Get In Touch'/>
       <Contact/>
       <Footer/>
      </div>
      


      
    </div>
  );
};

export default App;