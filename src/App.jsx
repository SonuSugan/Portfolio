import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Experience from "./Components/Experience/Experience";
// import Footer from "./Components/Footer/Footer";
// import Contact from "./Components/Contact/Contact";
import { themeContext } from "./Components/Context";
import { useContext } from "react";
import Main from './Components/Main'
import Skill from './Components/Skill'
import SkillData from './Components/Skilldata'
import Work from './Components/Work'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "White" : " ",
      }}
    >
      <Navbar />
      <Main/>
      <Skill/>
      {/* <SkillData/> */}
      {/* <Intro /> */}
      {/* <Skill /> */}
      {/* <Experience /> */}
      <Work/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
