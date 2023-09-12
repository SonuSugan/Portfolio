import Card from "../Components/Card/Card";
import mongo from "../Image/mongo.jpg";
import react1 from "../Image/react.png";
import hcj from "../Image/HCJ.jpg";
import mern from "../Image/mern.png";
import node from "../Image/node.png";
const Hello = () => {
  return (
    <div className="center">
      <div className="scroll">
        <div className="hello">
        <Card
            emoji={hcj}
            heading={"HTML,CSS and JS"}
            detail={
              "HTML, CSS, and JavaScript are the foundational technologies used in web development to create and design websites with interactive features"
            }
          />
          <Card
          emoji={mern}
          heading={"MERN"}
          detail={
            "he MERN stack is a popular and powerful technology stack used for web development, and it stands for MongoDB, Express.js, React, and Node.js."
          }
        />
        <Card
          emoji={mongo}
          heading={"Database"}
          detail={
            "MongoDB is a popular NoSQL database which is flexible and efficient way to store or manage data. As of 2023, MongoDB has gained significant traction in the developer community.."
          }
        />

        <Card
          emoji={react1}
          heading={"React Developer"}
          detail={
            "React is a popular JavaScript library for building UI for both web and app. It a collection of components, which can be combined to form complete screens, pages, and apps."
          }
        />

        <Card
          emoji={node}
          heading={"Node.js"}
          detail={
            "Node.js is a popular open-source runtime environment for executing JavaScript code on the server-side. It allows developers to build scalable network applications efficiently and effectively."
          }
        />
        
        </div>
      
        

        
      </div>
    </div>
  );
};

export default Hello;
