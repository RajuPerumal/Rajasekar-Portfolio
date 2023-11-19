import Navbar from "./Components/Navbar";
// import TextRevealing from "./Components/TextRevealing";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Intro from "./Components/intro";
import Skills from "./Components/skills";
import Works from "./Components/works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
      {/* <TextRevealing/> */}
    </div>
  );
}

export default App;
