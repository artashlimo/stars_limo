import Home from "./components/Home";
import Cars from "./components/Cars";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

import "./App.css";
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const executeScroll = (ref) => ref.current.scrollIntoView();
  const refList = [useRef('cars'), useRef('aboutUs'), useRef('footer')]
  
  return (
    <div className="App">
      <Home executeScroll={executeScroll} refList={refList}/>
      <Cars refProp={refList[0]} />
      <AboutUs refProp={refList[1]} />
      <Footer refProp={refList[2]} />
    </div>
  );
}

export default App;
