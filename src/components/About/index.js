import { Link, useLocation } from "react-router-dom";
import '../Reuse/reuse.css';
import './style.css';

const About = () => {
    return (
    <div className="about">
    <div className="abt_me">
        <h1>
        <a href="#!">
            <span>M</span>
            <span>e</span>
            <span>,</span>
            <a href="#!" className="dist">
            <span>M</span>
            <span>y</span>
            <span>s</span>
            <span>e</span>
            <span>l</span>
            <span>f</span>
            </a>
            <a href="#!" className="dist">
            <span> & </span>
            </a>
            <a href="#!" className="dist">
            <span>I</span>
            </a>
          </a>

        </h1>
        <br></br>
        <p>
        Hey there 👋 , I am Amish Adhikari. A software engineer graduate from General Assembly, with over 5 years of experience in IT industry as a Business Analyst and Scrum Master. I have a serious passion for UI effects, animations, creating intuitive and dynamic user experience.
        </p>
        <p>
        Working in a product team within IT department and being technically illiterate, led me to the journey of being a software engineer. Moreover, being a gamer since childhood, I always carved a niche for myself, being a techno functional person.
        </p>
        <p>
        My colleagues describe me as a person who is not afraid of failure instead learn from it and innovate. Apart from work I play football, pool games, swim, dance and enjoy scooners/pints with my mates(i.e. professional and personal).I have excellent time management, interpersonal and analytical skills, with strong keep learning attitude.
        </p>
    </div>
    <div className="person">
      <img
        src={"https://i.imgur.com/RrBJFGu.png"}
        alt="my picture"
      /> 
    </div>   
  </div>
);
};

export default About
