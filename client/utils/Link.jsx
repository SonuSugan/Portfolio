import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiAerialSignal } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";

const Links = [
  { text: "Home", icon: <FaHome />, path: "hero", set: -100 },
  { text: "About", icon: <GiSkills />, path: "about", set: -50 },
  { text: "Project ", icon: <GiAerialSignal />, path: "project", set: -50 },
  { text: "Work", icon: <GiAerialSignal />, path: "work", set: -50 },
  { text: "Contact", icon: <GrContactInfo />, path: "contact", set: -50 },
];

export default Links;
