import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiAerialSignal } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";

const Links = [
  { text: "Home", icon: <FaHome />, path: "home" },
  { text: "About", icon: <GiSkills />, path: "about" },
  { text: "Project ", icon: <GiAerialSignal />, path: "project" },
  { text: "Work", icon: <GiAerialSignal />, path: "work" },
  { text: "Contact", icon: <GrContactInfo />, path: "contact" },
];

export default Links;
