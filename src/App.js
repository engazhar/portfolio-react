import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div id="root">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Azhar Nazir - Portfolio</title>
          <link rel="canonical" href="https://magenta-dodol-530e69.netlify.app" />
      </Helmet>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
