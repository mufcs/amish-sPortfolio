import "./style.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import GetAppIcon from '@material-ui/icons/GetApp';

const Footer = () => {
  return (
    <footer>
      <div className="links__socialmedia">
            <div className="LinkedIn__icon">
              <a href="https://www.linkedin.com/in/amishadhikari/" target="_blank"><LinkedInIcon /></a>
            </div>
            <div className="Git__icon">
              <a href="https://github.com/mufcs?tab=repositories" target="_blank" ><GitHubIcon /></a>
            </div>
            <div className="Download__icon">
              <button className="Resume__icon">
                Resume
              <a href="https://drive.google.com/file/d/1YfbEKo2towCZNF6daZhUJVsfvcebAiXS/view?usp=sharing" target="_blank"><GetAppIcon /></a>
              </button>
            </div>
            {/* <div className="trance"> 
              <audio controls>
              <source src="uplifting.mp3" type="audio/mpeg"/>
              Your browser does not support the audio element.
              </audio>
            </div>  */}
      </div>
    </footer>
  );
};

export default Footer;
