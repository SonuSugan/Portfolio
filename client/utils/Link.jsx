import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiAerialSignal } from "react-icons/gi";
import { GrContactInfo } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

const Links = [
  { text: "Home", icon: <FaHome />, path: "hero", set: -100 },
  { text: "About", icon: <BsPersonLinesFill />, path: "about", set: -50 },
  { text: "Project ", icon: <AiOutlineFundProjectionScreen />, path: "project", set: -50 },
  { text: "Work", icon: <MdOutlineWorkOutline />, path: "work", set: -50 },
  { text: "Contact", icon: <GrContactInfo />, path: "contact", set: -50 },
];

export default Links;
