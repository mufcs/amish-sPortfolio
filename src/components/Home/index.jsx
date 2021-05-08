import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Hi,</h1>
        <h1>I am Amish Adhikari,</h1>
        <h1>Software Developer.</h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="Brief__me">
          <div className="text1">
            <div className="one">HTML</div>
            <div className="two">CSS</div>
            <div className="three">React</div>
            <div className="four">NodeJs</div>
            <div className="five">MongoDB</div>
            <div className="six">JavaScript-JQuery</div>
            <div className="seven">Firebase</div>
            <div className="eight">Ruby on Rails</div>
            <div className="nine">Postgressql</div>
          </div>
      </div>     
    </div>
  );
};

export default Home;
