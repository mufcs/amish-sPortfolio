import "./style.css";

const Work = () => {
  return (
    <div className="head">
      <h1>
      <a href="#!">
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
      </a>
      </h1>
      <p>A small gallery of recent projects. Some of these projects were done by myself and some with an amazing people whom I met at General Assembly. Promising start and more in the pipeline.
      </p>
      <div className="work">
        <div className="text2">
            <div class="content_area">
              <div class="img_text">
                  <h1>ZeiLibrary</h1>
                  <p>Zelibrary is a virtual library where you are able to search/add/delete/review book/s.</p>
                  <h2>Tech stack</h2>
                  <p>ReactJs, NodeJs-Express, MongoDB</p>
                  <a href="https://zeibrary.netlify.app/" target="_blank" class="card__link">View Project</a> 
              </div>
            </div>
          </div>
            
            <div className="text3">
              <div class="content_area">
                <div class="img_text">
                  <h1>Slack Me</h1>
                  <p>SlackMe is a real time responsive web communication platform, Which is inspired by Slack.</p>
                  <h2>Tech stack</h2>
                  <p>ReactJs, Firebase, Material-UI</p>
                  <a href="https://slameme-portfolio.web.app/" target="_blank" class="card__link">View Project</a> 
                </div>
              </div>
            </div>

            <div className="text4">
              <div class="content_area">
                <div class="img_text">
                  <h1>Tic-tac-toe</h1>
                  <p>Tic-tac-toe is a classic game for two players, which is played in a 3x3 grid. Also known as Xs and Os.</p>
                  <h2>Tech stack</h2>
                  <p>HTML, CSS, Javascript-JQuery</p>
                  <a href="https://mufcs.github.io/tic-tak-toe/" target="_blank" class="card__link">View Project</a> 
                </div>
              </div>
            </div>           
        </div> 
      </div>        
   )
};

export default Work;
  